import React from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo)}
      />
      <span>{todo.task}</span>
      <button onClick={() => removeTodo(todo.id)} className="delete-button">Delete</button>
    </div>
  );
};

export default TodoItem;
