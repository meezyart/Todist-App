import React from 'react';
import { Checkbox } from '../components/CheckBox'

export const Tasks = () => {
  const tasks = [];

  let projectName = "";

  return(
    <div className='tasks' data-testId="task">
  <h2 data-testId="project-name">{projectName}</h2>
  <ul className="task__list">
    {tasks.map(task => (
      <li key={`${task.id}`}>
        <Checkbox id={task.id} />
        <span>{task.task}</span>
      </li>
    ))}
  </ul>
    </div>
  )
}
