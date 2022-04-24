import React from 'react';
import {
  Textarea,
  Input,
  Stack,
  Container,
  Box,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { SmallAddIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';

function AddNote({ handleAddNote }) {
  let [title, setTitle] = React.useState('');
  let [text, setText] = React.useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleInputChange = e => {
    let inputTitle = e.target.value;
    setTitle(inputTitle);
  };

  let handleInputText = e => {
    let inputText = e.target.value;
    setText(inputText);
  };

  const handleSubmit = () => {
    handleAddNote(title, text);
    setTitle('');
    setText('');
    onClose();
  };

  return (
    <div className="note new">
      <Container>
        <Flex mb="1">
          <Menu onClose={onClose} isOpen={isOpen}>
            <Spacer />
            <MenuButton
              as={IconButton}
              icon={<SmallAddIcon />}
              bg="gray.100"
              color="gray.400"
              onClick={onOpen}
            />
            <MenuList mr="3em" shadow="xl" borderRadius="xl">
              <Box p="4" borderRadius="lg">
                <Container minW="350px" minH="350px" centerContent pt="3">
                  <Stack spacing={3} minW="350px">
                    <Flex mb="1">
                      <Spacer />
                      <IconButton
                        size="sm"
                        w="8"
                        color="gray.500"
                        icon={<CloseIcon />}
                        onClick={onClose}
                      />
                    </Flex>

                    <Box>
                      <Input
                        value={title}
                        onChange={handleInputChange}
                        placeholder="Title"
                        size="md"
                      />
                    </Box>
                    <Box>
                      <Textarea
                        minH="150px"
                        value={text}
                        onChange={handleInputText}
                        placeholder="Write your notes here"
                        size="md"
                      />
                    </Box>
                    <Flex mb="1">
                      <Spacer />
                      <Button type="submit" size="sm" onClick={handleSubmit}>
                        {' '}
                        save
                      </Button>
                    </Flex>
                  </Stack>
                </Container>
              </Box>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </div>
  );
}

export default AddNote;
