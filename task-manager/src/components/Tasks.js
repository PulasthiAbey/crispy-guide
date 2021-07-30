import Task from "./Task";

function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((tasks) => (
        <Task key={tasks.id} task={tasks} />
      ))}
    </>
  );
}

export default Tasks;
