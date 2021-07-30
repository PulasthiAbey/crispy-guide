import Task from "./Task";

function Tasks(props) {
  return (
    <>
      {props.tasks.map((task) => (
        <Task key={props.task.id} task={props.task} />
      ))}
    </>
  );
}

export default Tasks;
