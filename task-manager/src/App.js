import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },

    {
      id: 2,
      text: "Office Appointment",
      day: "Feb 5th at 3.30pm",
      reminder: true,
    },

    {
      id: 3,
      text: "Shopping",
      day: "Feb 5th at 4.30pm",
      reminder: false,
    },
  ]);

  //add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete tasks from
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder button
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Available"
      )}
    </div>
  );
}

export default App;
