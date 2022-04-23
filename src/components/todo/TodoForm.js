import React, { useState } from 'react';
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
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Stack,
  IconButton
} from '@chakra-ui/react';
import { SmallAddIcon, CloseIcon } from '@chakra-ui/icons';
import { BiImageAdd, BiMinus, BiX } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';
import { BackButton } from '../BackButton';

const initialState = {
  name: '',
  description: '',
  saving: false,
};

export default function TodoForm({
  updateTodos,
  todos,
}) {
  const [formState, updateFormState] = useState(initialState);

  function onChangeText(e) {
    e.persist();
    updateFormState(currentState => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

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
      }); 
      const { username } = await Auth.currentAuthenticatedUser(); // new
      updateTodos([...todos, { ...todoInfo, owner: username }]); // updated
      updateFormState(currentState => ({ ...currentState, saving: false }));
          
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
          <Button onClick={deleteTodo} />
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
                      className="todo-name"
                      onChange={onChangeText}
                    />
                  </Box>

                  <Box>
                    <Textarea
                      id="input-style"
                      placeholder="Description"
                      name="description"
                      size={'sm'}
                      className="todo-description"
                      minH={'100px'}
                      onChange={onChangeText}
                    />
                  </Box>
                </Stack>
              </Container>
              <Container mt={'1'}>
                <Flex my="1">
                  <Spacer />
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
