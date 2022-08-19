import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { tasks as data } from './tasks';
import {useState, useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([...tasks, {
      id: tasks.length + 1,
      title: taskTitle,
      description: 'nueva tarea'
    }]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
