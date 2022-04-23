import React, { useEffect, useState } from 'react';
import Amplify, { Hub } from '@aws-amplify/core';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Todo } from '../../models';
import format from 'date-fns/format';
import awsconfig from '../../aws-exports';
import {
  Input,
  Button,
  Box,
  Container,
  FormControl,
  useColorModeValue,
  Form,
  Flex,
  Spacer,
  FormLabel,
  HStack,
  Text,
  Stack,
  Center,
} from '@chakra-ui/react';
/*
  id: ID!
  todo: String
  title: String
  owner: String
  

    id: ID!
  name: String
  description: String
  image: String
  type: String! @index(name: "todosByDate", queryField: "todosByDate", sortKeyFields: ["createdAt"])
  createdAt: String!
   */
Amplify.configure(awsconfig);

async function listTodos(setTodos) {
  const todos = await DataStore.query(Todo, Predicates.ALL);
  setTodos(todos);
}

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [id, setId] = useState('');
  const [displayAdd, setDisplayAdd] = useState(true);
  const [displayUpdate, setDisplayUpdate] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    await DataStore.save(
      new Todo({
        todo: value,
      })
    );
    listTodos(setTodos);
    setValue('');
  }

  async function handleSearch(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    setDisplaySearch(true);
    const search = await DataStore.query(Todo, c => c.todo('contains', value));
    setTodos(search);
    setValue('');
  }

  async function handleDelete(id) {
    const toDelete = await DataStore.query(Todo, id);
    await DataStore.delete(toDelete);
  }

  async function handleSelect(todo) {
    setValue(todo.todo);
    setId(todo.id);
    setDisplayUpdate(true);
    setDisplayAdd(false);
  }

  async function handleUpdate(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const original = await DataStore.query(Todo, id);
    await DataStore.save(
      Todo.copyOf(original, updated => {
        updated.todo = value;
      })
    );
    listTodos(setTodos);
    setDisplayAdd(true);
    setDisplayUpdate(false);
    setValue('');
  }

  useEffect(() => {
    listTodos(setTodos);

    const listener = data => {
      if (data.payload.event === 'signOut') {
        DataStore.clear();
      }
    };
    Hub.listen('auth', listener);

    const subscription = DataStore.observe(Todo).subscribe(msg => {
      listTodos(setTodos);
    });

    const handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      console.log(condition);
      if (condition === 'online') {
        listTodos(setTodos);
      }
    };

    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
    
      <div className="container">
        <Container>
          {displayAdd ? (
            <form>
              <Input
                type="text"
                placeholder="New Todo"
                aria-label="Todo"
                value={value}
                onChange={e => setValue(e.target.value)}
              />

              <div className="Input-group-append">
                <Button
                  type="Button"
                  onClick={e => {
                    handleSubmit(e);
                  }}
                >
                  Add Todo
                </Button>
                <Button
                  type="Button"
                  onClick={e => {
                    handleSearch(e);
                  }}
                >
                  Search
                </Button>
              </div>
            </form>
          ) : null}
          {displayUpdate ? (
            <form
              onSubmit={e => {
                handleUpdate(e);
              }}
            >
              <Input
                type="text"
                placeholder="Update Todo"
                aria-label="Todo"
                aria-describedby="basic-addon2"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <Button type="submit">Update Todo</Button>
            </form>
          ) : null}
        </Container>
      </div>

      <div className="container">
        <Box>
          {todos.map((item, i) => {
            return (
              <div role="alert">
                <Center>
                  <HStack
                    maxW={'350px'}
                    bg={'white'}
                    h={'50px'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    mt={'4'}
                  >
                    {/* <Box
                      height={'200px'}
                      boxShadow={'xl'}
                      padding={'4'}
                      borderRadius={'lg'}
                      w={'100%'}
                      bg={useColorModeValue('ivory', 'gray.700')}
                    > */}
                    <Box
                      id="todo-name"
                      w={'100px'}
                      h={'50px'}
                      bg={useColorModeValue('#e3f0ff', 'gray.800')}
                    >
                      
                    </Box>
               
              
                    <Box
                      id="todo-description"
                      bg={useColorModeValue('white', 'gray.900')}
                      h={'50px'}
                      m={'0'}
                      width={'250px'}
                    >
                      <Text color={'gray.500'}> <span key={item.i} onClick={() => handleSelect(item)}>
                          {item.todo}
                        </span></Text>
                       
                    </Box>

                    <Flex>
                      <Spacer />
                      <Button
                        key={item.i}
                        type="Button"
                        bg={'transparent'}
                        color={'gray.400'}
                        onClick={() => {
                          handleDelete(item.id);
                          listTodos(setTodos);
                        }}
                      >
                        <span aria-hidden="true">&times;</span>
                      </Button>
                    </Flex>
                    {/* </Box> */}
                  </HStack>
                </Center>
              </div>
            );
          })}
          {displaySearch ? (
            <Button
              className="Button btn-warning float-right text-white font-weight-bold"
              onClick={() => {
                setDisplaySearch(false);
                listTodos(setTodos);
              }}
            >
              <span aria-hidden="true">Clear Search</span>
            </Button>
          ) : null}
        </Box>
      </div>
    </>
  );
}
export default TodoApp;
