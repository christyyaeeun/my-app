import React, { useEffect, useState } from 'react';
import Amplify, { API } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from '../../graphql/mutations';
import {
  Button,
  Input,
  IconButton,
  Box,
  Container,
  Center,
  Text,
  Stack,
  HStack,
  Flex,
  useColorModeValue,
  Menu,
  MenuButton,
  Spacer,
  MenuList,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { SmallAddIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { CgRemoveR } from 'react-icons/cg';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const initialFormState = { name: '', description: '' };

//  id, name description
function Appy() {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const apiData = await API.graphql({ query: listTodos });
    setTodos(apiData.data.listTodos.items);
  }

  async function createTodo() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createTodoMutation,
      variables: { input: formData },
    });
    setTodos([...todos, formData]);
    setFormData(initialFormState);
  }

  async function deleteTodo({ id }) {
    const newTodosArray = todos.filter(todo => todo.id !== id);
    setTodos(newTodosArray);
    await API.graphql({
      query: deleteTodoMutation,
      variables: { input: { id } },
    });
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {todos.map(todo => (
        <div id="card-wrap">
          <div id="card" key={todo.id || todo.name}>
            <Center>
              <HStack
                maxW={'400px'}
                bg={'white'}
                h={'70px'}
                boxShadow={'2xl'}
                rounded={'md'}
                mt={'4'}
              >
                <Box
                  id="todo-name"
                  w={[270, 350, 420]}
                  h={'70px'}
                  bg={useColorModeValue('#e3f0ff', 'gray.800')}
                >
                  <Stack>
                    <Text color={'gray.500'}>
                      {/* {format(new Date(todo.createdAt), 'MM/dd')} */}
                      {/* {format(new Date(todo.createdAt), 'LLL. dd')} */}
                      {format(new Date(todo.createdAt), 'LLL. dd')}
                    </Text>
                    <Text color={'gray.500'}>
                      {format(new Date(todo.createdAt), 'h:mm a')}
                    </Text>
                  </Stack>
                </Box>
                <Box
                  id="todo-description"
                  bg={useColorModeValue('white', 'gray.900')}
                  h={'70px'}
                  m={'0'}
                  width={'250px'}
                >
                  <Text color={'gray.500'}> {todo.name} | </Text>
                </Box>
                <Box
                  id="todo-description"
                  bg={useColorModeValue('white', 'gray.900')}
                  h={'70px'}
                  m={'0'}
                  width={'250px'}
                >
                  <Text color={'gray.400'}>{todo.description}</Text>
                </Box>

                <Button
                  bg={'transparent'}
                  color={'gray.400'}
                  as={IconButton}
                  icon={<CgRemoveR />}
                  onClick={() => deleteTodo(todo)}
                >
                  Delete
                </Button>
              </HStack>
            </Center>
          </div>
        </div>
      ))}
    </>
  );
}

export default Appy;
