import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
