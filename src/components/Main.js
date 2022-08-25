import React, { useState } from 'react';
import Form from './Form';
import List from './List';

export default function Main() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo || /^\s*$/.test(todo)) {
      return;
    }
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todo) => {
    setTodos([...todos].filter((ele) => ele !== todo));
  };

  const editTodo = (todo, newTodo) => {
    if (!newTodo || /^\s*$/.test(newTodo)) {
      return;
    }
    setTodos([...todos].map((ele) => (ele === todo ? newTodo : ele)));
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <div>
      <Form onSubmit={addTodo} onClick={deleteAll} />
      <List data={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}
