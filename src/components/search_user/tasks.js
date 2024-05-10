const Task = ({ task }) => {
  return (
    <div key={task.id} id="task">
      <p as="b"><b>{task.tytul}</b></p> - {task.opis}
    </div>
  );
};

export default Task;
