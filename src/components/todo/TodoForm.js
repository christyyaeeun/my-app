import React, { useState } from 'react';
// import Button from '../../components/post/Btn';
import { v4 as uuid } from 'uuid';
import { Storage, API, Auth } from 'aws-amplify';
import { createTodo } from '../../graphql/mutations';
import {
  Box,
  Container,
  Spacer,
  Textarea,
  Button,
  Input,
  Image,
  Text,
  Icon,
} from '@chakra-ui/react';
import { SmallAddIcon, CloseIcon } from '@chakra-ui/icons';
import { BiImageAdd, BiMinus, BiX } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';
import {
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { BackButton } from '../BackButton';

const initialState = {
  name: '',
  description: '',
  saving: false,
};

export default function TodoForm({
  // updateOverlayVisibility,
  updateTodos,
  todos,
}) {
  /* 1. Create local state with useState hook */
  const [formState, updateFormState] = useState(initialState);

  /* 2. onChangeText handler updates the form state when a user types into a form field */
  function onChangeText(e) {
    e.persist();
    updateFormState(currentState => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  // function onChangeFile(e) {
  //   e.persist();
  //   if (!e.target.files[0]) return;
  //   const fileExtPosition = e.target.files[0].name.search(/.png|.jpg|.gif/i);
  //   const firstHalf = e.target.files[0].name.slice(0, fileExtPosition);
  //   const secondHalf = e.target.files[0].name.slice(fileExtPosition);
  //   const fileName = firstHalf + '_' + uuid() + secondHalf;
  //   console.log(fileName);
  //   const image = { fileInfo: e.target.files[0], name: fileName };
  //   updateFormState(currentState => ({
  //     ...currentState,
  //     file: URL.createObjectURL(e.target.files[0]),
  //     image,
  //   }));
  // }

  async function save() {
    try {
      const { name, description } = formState;
      if (!name || !description) return;
      updateFormState(currentState => ({ ...currentState, saving: true }));

      const todoId = uuid();
      const todoInfo = {
        name,
        description,
        id: todoId,
      };

      await API.graphql({
        query: createTodo,
        variables: { input: todoInfo },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      }); // updated
      const { username } = await Auth.currentAuthenticatedUser(); // new
      updateTodos([...todos, { ...todoInfo, owner: username }]); // updated
      updateFormState(currentState => ({ ...currentState, saving: false }));
          
      // updateOverlayVisibility(false);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Flex mb="2em">
        <Text fontSize={'xl'} color={'gray.500'}>
          {' '}
          Reminders{' '}
        </Text>
        <Spacer />
        <Menu onClose={onClose} isOpen={isOpen}>
          <Spacer />
          <MenuButton
            as={IconButton}
            icon={<SmallAddIcon />}
            bg="gray.100"
            color="gray.400"
            onClick={onOpen}
          />
          <MenuList shadow="xl" borderRadius="lg">
            <Box px="2" borderRadius="lg">
              <Container p={'0'}>
                <Flex mb="1">
                  <Spacer />
                  <IconButton
                    bg={'gray.50'}
                    size={'sm'}
                    color="#8cabcd"
                    icon={<BiX />}
                    onClick={onClose}
                  />
                </Flex>
              </Container>
              <Container centerContent pt="3">
                <Stack spacing={3}>

                  <Box>

                    <Input
                      id="input-style"
                      placeholder="name"
                      name="name"
                      size={'sm'}
                      minW={'250px'}
                      className="post-name"
                      onChange={onChangeText}
                    />
                  </Box>

                  <Box>
                    <Textarea
                      id="input-style"
                      placeholder="Description"
                      name="description"
                      size={'sm'}
                      className="post-description"
                      minH={'100px'}
                      onChange={onChangeText}
                    />
                  </Box>
                </Stack>
              </Container>
              <Container mt={'1'}>
                <Flex my="1">
                  <Spacer />
                  {/* <Button id="submit" title="save" onClick={save} /> */}
                  <Button id="submit" title="save" onClick={save}>save</Button>

                </Flex>
              </Container>
            </Box>
          </MenuList>
        </Menu>
      </Flex>
    </Container>
  );
}
