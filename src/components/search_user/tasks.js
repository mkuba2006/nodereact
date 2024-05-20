import './search.css'

const Task = ({ task }) => {
  return (
    <div key={task.id} id="task">
      <p id="tytul_ans">
      <b id="tytul_task">{task.tytul}</b>
      </p>
      <h6>
      - {task.opis}
      </h6>
       
    </div>
  );
};

export default Task;
