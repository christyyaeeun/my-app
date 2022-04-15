import React, { useEffect, useState } from 'react'
import Amplify, { API } from 'aws-amplify'
import { listTodos } from "../../graphql/queries";
import
{
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from "../../graphql/mutations";
import
{
  Button, Input, IconButton, Box, Container,
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
import { format } from "date-fns";
import { SmallAddIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { CgRemoveR } from 'react-icons/cg';
import awsExports from "../../aws-exports";
Amplify.configure( awsExports );

const initialFormState = { name: "", description: "" };

function Appy ()
{
  const [ todos, setTodos ] = useState( [] );
  const [ formData, setFormData ] = useState( initialFormState );

  useEffect( () =>
  {
    fetchTodos();
  }, [] );

  async function fetchTodos ()
  {
    const apiData = await API.graphql( { query: listTodos } );
    setTodos( apiData.data.listTodos.items );
  }

  async function createTodo ()
  {
    if ( !formData.name || !formData.description ) return;
    await API.graphql( {
      query: createTodoMutation,
      variables: { input: formData },
    } );
    setTodos( [ ...todos, formData ] );
    setFormData( initialFormState );
  }

  async function deleteTodo ( { id } )
  {
    const newTodosArray = todos.filter( ( todo ) => todo.id !== id );
    setTodos( newTodosArray );
    await API.graphql( {
      query: deleteTodoMutation,
      variables: { input: { id } },
    } );
  }
  const { isOpen, onOpen, onClose } = useDisclosure()




  return (
    <>
      <Container mt={ '6' } maxW={'300px'} centerContent>


        <Container>
          <Flex mb='1'>        <Text fontSize={ 'xl' } color={ 'gray.500' }> Reminders </Text>

            <Spacer />
            <Menu onClose={ onClose } isOpen={ isOpen }>

              <MenuButton as={ IconButton } icon={ <SmallAddIcon /> } bg='gray.100' color='gray.400' onClick={ onOpen } />
              <MenuList mr='3em' shadow='xl' borderRadius='xl'>

                <Box p='4' borderRadius='lg' >
                  <Container minW='350px' minH='300px' centerContent pt='3'>
                    <Stack spacing={ '4' } w={ '350px' } >



                      <Input
                        id="name-input"
                        onChange={ ( e ) =>
                          setFormData( { ...formData, name: e.target.value } )
                        }
                        placeholder="Note name"
                        value={ formData.name }
                      />

                      <Input
                        id="description-input"
                        onChange={ ( e ) =>
                          setFormData( { ...formData, description: e.target.value } )
                        }
                        placeholder="Note description"
                        value={ formData.description }
                      />
                      <Button id="save-btn" onClick={ createTodo }>
                        save
                      </Button>
                    </Stack>
                  </Container>
                </Box>

              </MenuList>

            </Menu>


          </Flex>
        </Container>





        { todos.map( ( todo ) => (
          <div id="card-wrap">
            <div id="card" key={ todo.id || todo.name }>
              <Center>
                <HStack maxW={ '400px' } bg={ 'white' } h={ '70px' } boxShadow={ '2xl' } rounded={ 'md' } mt={ '4' }>

                  <Box id='todo-name'
                    minW={ '80px' }
                    h={ '70px' }
                    bg={ useColorModeValue( '#e3f0ff', 'gray.800' ) }>

                    <Text color={ 'gray.500' }> { format( new Date( todo.createdAt ), "MM/dd" ) }  </Text>
                  </Box>
                  <Box id='todo-description' bg={ useColorModeValue( 'white', 'gray.900' ) } h={ '70px' } m={ '0' }
                    width={ '250px' }>
                    <Text color={ 'gray.500' }> { todo.name } | </Text>
                  </Box>
                  <Box id='todo-description' bg={ useColorModeValue( 'white', 'gray.900' ) } h={ '70px' } m={ '0' }
                    width={ '250px' }>

                    <Text color={ 'gray.400' }>{ todo.description }</Text>

                  </Box>

                  <Button bg={ 'transparent' } color={ 'gray.400' } as={ IconButton } icon={ <CgRemoveR /> } onClick={ () => deleteTodo( todo ) }>
                    Delete
                  </Button>

                </HStack>

              </Center>

            </div>
          </div>

        ) ) }

        <div>
        </div>

      </Container>
    </>
  )
}

export default Appy