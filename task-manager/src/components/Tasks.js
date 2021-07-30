import { useState } from "react";

function Tasks() {
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
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
