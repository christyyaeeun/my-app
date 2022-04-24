import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from '../../graphql/mutations';
import {
  Input,
  Image,
  Button,
  Text,
  Box,
  Icon,
  Container,
  useColorModeValue,
  Divider,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { BiImageAdd } from 'react-icons/bi';
import format from 'date-fns/format';
const initialFormState = { name: '', description: '', image: {} };

function NoteApp(user) {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async note => {
        if (note.image) {
          const image = await Storage.get(note.image);
          note.image = image;
        }
        return note;
      })
    );
    setNotes(apiData.data.listNotes.items);
    console.log('notes', notes);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createNoteMutation,
      variables: { input: formData },
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setNotes([...notes, formData]);
    setFormData(initialFormState);
  }

  //   function onChangeText(e) {
  //     e.persist();
  //     e.preventDefault();
  //   }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotes();
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
    console.log('new notes', newNotesArray);
  }

  return (
    <div className="Notes">
      <Input
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        placeholder="Note name"
        value={formData.name}
      />
      <Input
        onChange={e =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Note description"
        value={formData.description}
      />
      {/* <Input type="file" onChange={onChange} /> */}

      <Box className="image-upload" w="100%">
        <label for="file-input">
          <Icon className="img" color="#8dbae8" w={6} h={6} as={BiImageAdd} />
        </label>
        <input id="file-input" type="file" onChange={onChange} />
      </Box>

      <Button onClick={createNote}>Create Note</Button>
      <div style={{ marginBottom: 30 }}>
        {notes.map(note => (
          <div key={note.id || note.name}>
            <Container p={'5'} maxW={'450px'}>
              <Container id="img-card" p={'0'}>
                <Container
                  id="card-wrap"
                  borderWidth="1px"
                  bg={useColorModeValue('white', 'gray.600')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  p={'2'}
                >
                  <Container
                    id="img-wrap"
                    bg={useColorModeValue('white', 'gray.600')}
                  >
                    <Box
                      id="img-container"
                      maxW={'sm'}
                      overflow={'hidden'}
                      maxH={{ base: '350px', lg: '350px' }}
                    >
                      <Image
                        borderRadius={'lg'}
                        id="note-img"
                        src={note.image}
                        objectFit="cover"
                        m={'auto'}
                      />
                    </Box>
                  </Container>
                  <Divider color={'gray.400'} />
                  <Container
                    padding={'2'}
                    bg={useColorModeValue('white', 'gray.600')}
                  >
                    <Stack>
                      <Box bg={''}>
                        <HStack spacing="10px">
                          <Box>
                            <Text
                              color={useColorModeValue('#8cabcd', 'white')}
                              fontWeight={600}
                            >
                              @{note.owner} |
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              color={useColorModeValue('gray.600', 'white')}
                              fontSize={'1rem'}
                            >
                              {note.name}
                            </Text>
                          </Box>
                        </HStack>
                        <Box my={'1'}>
                          <Text
                            color={useColorModeValue('gray.500', 'white')}
                            fontSize={'.9rem'}
                            paddingLeft={'.1em'}
                          >
                            {note.description}
                          </Text>
                          <Text color={'gray.500'}>
                            <small>
                              {format(new Date(note.createdAt), 'MM/dd/yyyy')}
                            </small>
                          </Text>
                          <Image src={'user.avatar'} />
                        </Box>
                      </Box>
                    </Stack>
                  </Container>
                </Container>
              </Container>
            </Container>
            {/* <h2>{note.name}</h2>
            <p>{note.description}</p>
            <Button onClick={() => deleteNote(note)}>Delete note</Button>
            {note.image && <img src={note.image} />} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteApp;
