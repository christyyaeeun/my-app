import React from 'react';
import {
  Table,
  Spinner,
  Thead,
  Td,
  Tr,
  Tbody,
  Th,
  Button,
  Container,
} from '@chakra-ui/react';

const TodoList = props => {
  return (
    <div>
      <Container>
        {props.todos.length > 0 ? (
          <Table>
            <Thead>
              <Tr>
                <Th>#ID</Th>
                <Th>ITEM</Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.todos.map(item => (
                <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  {item.description}
                  <Td>
                    <Button
                      color="danger"
                      onClick={() => props.handleDeleteTodo(item.id)}
                    >
                      X
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        )}
      </Container>
    </div>
  );
};

export default TodoList;
