import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const handleSubmit = e => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        autoFocus
        placeholder="Escribe tu tarea"
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        placeholder="Escribe la descripción de la tarea"
        onChange={e => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
