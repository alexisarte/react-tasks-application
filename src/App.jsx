import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { tasks as data } from './data/tasks';
import {useState, useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      id: tasks.length + 1,
      title: task.title,
      description: task.description
    }]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
