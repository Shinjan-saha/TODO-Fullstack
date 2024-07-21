import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
