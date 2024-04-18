const Task = ({ task }) => {
    return (
      <div>
        <p as="b"><b>{task.imie}</b>{task.tytul}</p> - {task.opis}
      </div>
    );
};
export default Task;