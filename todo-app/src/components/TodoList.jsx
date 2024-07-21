import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  if (!todos) {
    return <div>No todos available.</div>;
  }

  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))
      ) : (
        <div>No tasks available.</div>
      )}
    </div>
  );
};

export default TodoList;
