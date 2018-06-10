import React from 'react'
import Task from "./Task";

const TaskList = ({data}) =>
  <ul className="list-group">
    {data.map((item) =><Task key={item.id} {...item}/>)}
  </ul>

export default TaskList