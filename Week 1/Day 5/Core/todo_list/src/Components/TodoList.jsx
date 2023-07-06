import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskText = e.target.elements.task.value;
    if (taskText.trim() === '') {
      return;
    }
    const newTask = {
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
    e.target.elements.task.value = '';
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.text}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
