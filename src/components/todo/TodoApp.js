import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_exports from '../../aws-exports';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Container } from '@chakra-ui/react';
Amplify.configure(aws_exports);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await API.graphql(graphqlOperation(queries.listTodos));
      setTodos(result.data.listTodos.items);
    })();
  }, []);

  const handleAddTodo = async value => {
    const todo = {
      name: value,
    };
    const result = await API.graphql(
      graphqlOperation(mutations.createTodo, { input: todo })
    );
    setTodos([...todos, result.data.createTodo]);
  };

  const handleDeleteTodo = async id => {
    const todo = {
      id: id,
    };
    const result = await API.graphql(
      graphqlOperation(mutations.deleteTodo, { input: todo })
    );
    const filteredTodos = todos.filter(
      item => item.id !== result.data.deleteTodo.id
    );
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <Container>
        <TodoForm handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
      </Container>
    </div>
  );
};
export default TodoApp;

// import React from "react";
// import DisplayTodos from "./DisplayTodos";
// import Todos from "./Todos";

// import { motion } from "framer-motion";
// function TodoApp() {
//   return (
//     <div className="App">
//       <motion.h1
//         initial={{ y: -200 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", duration: 0.5 }}
//         whileHover={{ scale: 1.1 }}
//       >
//       </motion.h1>
//       <motion.div
//         initial={{ y: 1000 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", duration: 1 }}
//       >
//         <Todos />
//         <DisplayTodos />
//       </motion.div>
//     </div>
//   );
// }

// export default TodoApp;