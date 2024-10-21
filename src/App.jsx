import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId;
  };

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const updatedTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(updatedTask);
  };

  const handleDeleteTask = (taskId) => {
    const afterDeleted = tasks.map((t) => t.id !== taskId);
    setTasks(afterDeleted);
  };
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
}