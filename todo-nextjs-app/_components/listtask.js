import { useState } from 'react';

export default function ListTask({tasks, onChangeTask, onDeleteTask}) {
  //console.log(onChangeTask);
  return (
    <ul>
      {tasks && tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({task, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    //console.log(onChange);
    taskContent = (
      <>
        <input className='inputtask'
          value={task.task}
          onChange={(e) => {
            onChange({
              ...task,
              task: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.task}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <div className='listtask'>
      <label>
        <input 
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
       </label>
    </div>

  );
}
