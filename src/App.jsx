import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './styles.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');

    return localValue == null ? [] : JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  return (
    <>
      <NewTodoForm setTodos={setTodos} />
      <h1 className="header">To-do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
