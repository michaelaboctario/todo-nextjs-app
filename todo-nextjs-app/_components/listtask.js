import './listtask.css'

import { useState } from 'react';
let nextId = 0;

export default function ListTask () {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  return (
    <>
      <h3>Task to do:</h3>
      <div className='listtask'>
        <input
            value={task}
            onChange={e => setTask(e.target.value)}
        />
        <button onClick={() => {
            setList([
            ...list,
            { id: nextId++, task: task }
            ]);
            setTask("");
        }}>Add</button>
        </div>    
        <ul className='itemtask'>
            {list.map(item => (
            <li key={item.id}>{item.task}</li>
            ))}
        </ul>
    </>
  );
}
