import '@fontsource/inter/500.css';

import React, { useState, useEffect } from 'react';
import Amplify, { API, Storage, Auth } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import TodoForm from './TodoForm';
import { onTodoForm } from '../../graphql/subscriptions';
import {
  deleteTodo as deleteTodoMutation,
} from '../../graphql/mutations';
import { CgRemoveR } from 'react-icons/cg';
import { format, parseISO } from 'date-fns';

import {
  IconButton,
  Box,
  Container,
  Image,
  Center,
  Text,
  Stack,
  Spacer,
  HStack,
  Divider,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import awsconfig from '../../aws-exports.js';
Amplify.configure(awsconfig);
API.configure(awsconfig);

function Todo() {
  /* create a couple of pieces of initial state */
  const [todos, updateTodos] = useState([]);
  const [userTodos, updateUserTodos] = useState([]);

  /* fetch todos when component loads */
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
    let todoData = await API.graphql({
      query: listTodos,
      variables: { limit: 20 },
    });

    let todosArray = todoData.data.listTodos.items;
    todosArray = await Promise.all(
      todosArray.map(async todo => {
        return todo;
      })
    );
    setTodoState(todosArray);
  }

  async function setTodoState(todosArray) {
    const user = await Auth.currentAuthenticatedUser();
    const userData = todosArray.filter(p => p.owner === user.username);
    console.log('todosArray:', todosArray);
    updateUserTodos(userData);
    updateTodos(todosArray);
  }

  // function subscribe() {
  //   API.graphql({
  //     query: onTodoForm,
  //   }).subscribe(() => fetchTodos());
  // }

  useEffect(() => {
    fetchTodos();
    // const subscription = subscribe();
    // return () => subscription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//   async function deleteTodo({ id }) {
//     const newTodosArray = todos.filter(todo => todo.id !== id);
//     updateTodos(newTodosArray);
//     await API.graphql({
//       query: deleteTodoMutation,
//       variables: { input: { id } },
//     });
//   }

  return (
    <>
        <Container mt={'1em'}>

          <TodoForm updateTodos={setTodoState} todos={todos} />
        </Container>
        {/* <Container p={'5'} maxW={'450px'}>
          {todos.map(todo => (
            <Container
              id="card-wrap"
              borderWidth="1px"
              bg={'white'}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={'2'}
            >
              <div id="card" key={todo.id || todo.name}>
                <Center>
         
                    <Divider color={'gray.400'} />
                    <Container padding={'2'} bg={'white'}>
                      <Stack>
                        <Box bg={''}>
                          <HStack spacing="10px">
                           
                            <Box>
                              <Text
                                color={useColorModeValue('gray.600', 'white')}
                                fontSize={'1rem'}
                              >
                                {todo.name}
                              </Text>
                            </Box>``
                          </HStack>
                          <Box my={'1'}>
                            <Text
                              color={'gray.500'}
                              fontSize={'.9rem'}
                              paddingLeft={'.1em'}
                            >
                              {todo.description}
                            </Text>
                          </Box>
                          <Text color={'gray.500'} fontSize={'xs'}>
                            {format(parseISO(todo.createdAt), 'MM/dd/yyyy')}{' '}
                          </Text>
                        </Box>
                      </Stack>
                    </Container>
                </Center>
              </div>
            </Container>
          ))}
        </Container> */}
    </>
  );
}

export default Todo;
