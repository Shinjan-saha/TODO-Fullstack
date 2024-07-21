import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';

const API_URL = 'https://backend-with-go-todo-1.onrender.com/todos'; // Update this URL

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data || []); // Ensure it's an array
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await axios.post(API_URL, todo);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (todo) => {
    try {
      const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
      await axios.put(`${API_URL}/${todo.id}`, updatedTodo);
      setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error removing todo:', error);
    }
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
