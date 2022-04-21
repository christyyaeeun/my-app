import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import { deleteTodo } from '../../graphql/mutations';
import { createTodo as createTodoMutation } from '../../graphql/mutations';
import {
  Button,
  IconButton,
  Box,
  Center,
  Text,
  Stack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { CgRemoveR } from 'react-icons/cg';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const initialFormState = { name: '', description: '' };

//  id, name description
function Appy() {
  const [todos, setTodos] = useState([]);
  // const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    checkUser();
    fetchTodos();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log('user:', user);
    console.log('user attributes: ', user.attributes);
  }

  async function fetchTodos() {
    const apiData = await API.graphql({ query: listTodos });
    setTodos(apiData.data.listTodos.items);
  }

  // async function createTodo() {
  //   if (!formData.name || !formData.description) return;
  //   await API.graphql({
  //     query: createTodoMutation,
  //     variables: { input: formData },
  //   });
  //   setTodos([...todos, formData]);
  //   setFormData(initialFormState);
  // }

  // async function deleteTodo({id}) {
  //   const todoId = uuid();
  //   const todoInfo = {
  //     name,
  //     description,
  //     id: todoId
  //   }
  //   const newTodosArray = todos.filter(todo => todo.id !== id);
  //   await API.graphql({
  //     query: deleteTodo,
  //     variables: { input: { id } },
  //   });
  //   setTodos(newTodosArray);
  // }

  // const handleDeleteTodo = async id => {
  //   const todo = {
  //     id: id,
  //   }
  //   const result = await API.graphql(
  //     graphqlOperation(mutations.deleteTodo, { input: todo })
  //   );
  //   const filteredTodos = todos.filter(
  //     item => item.id !== result.data.deleteTodo.id
  //   );
  //   //Updates state
  //   setTodos(filteredTodos);
  // };

  // async function removeTodo(id) {
  //   await API.graphql(graphqlOperation(deleteTodo, { input: { id } }));
  //   setTodos(todos.filter(todo => todo.id !== id));
  // }

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
                  as={IconButton}
                  bg={'transparent'}
                  color={'gray.400'}
                  icon={<CgRemoveR />}
                  onClick={deleteTodo}
                />

                {/* <Button
                  bg={'transparent'}
                  color={'gray.400'}
                  as={IconButton}
                  icon={<CgRemoveR />}
                  onClick={() => handleDeleteTodo(handleDeleteTodo)}
                >
                  Delete
                </Button>  */}
              </HStack>
            </Center>
          </div>
        </div>
      ))}
    </>
  );
}

export default Appy;
