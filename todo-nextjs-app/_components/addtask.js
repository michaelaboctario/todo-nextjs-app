import './addtask.css'
import ListTask from './listtask';

import { useState } from 'react';
let nextId = 0;

export default function AddTask () {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  //console.log(handleChangeTask);
  //console.log(setList);

  function handleChangeTask(task) {
    setList(
      list.map((t) => {
        // console.log(task);
        // console.log(task.id);
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }
  
  function handleDeleteTask(taskId) {
    setList(list.filter((t) => t.id !== taskId));
  }
  
  return (
    <>
      <div className='listtask'>
        <input className='inputtask'
            value={task}
            onChange={e => setTask(e.target.value)}
        />
        <button onClick={() => {
            setList([
            ...list,
            { id: nextId++, task: task, done: false }
            ]);
            setTask("");
        }}>Add</button>
        </div>    
        {/* <ul className='itemtask'>
            {list.map(item => (
            <li key={item.id}>{item.task}</li>
            ))}
        </ul> */}
        <ListTask tasks={list} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}
