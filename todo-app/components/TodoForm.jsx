import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo({
      task,
      isCompleted: false,
    });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="todo-button">Add</button>
    </form>
  );
};

export default TodoForm;
