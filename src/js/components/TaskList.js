import React from 'react'
import Task from "./Task";

const data = [
  {
    id: 1,
    title: 'Type Something Here...',
    date: '5/14',
    file: 'https://i.imgur.com/SrU55KT.gif',
    comment: 'Something description',
    primary: true
  },
  {
    id: 2,
    title: 'Type Something Here...',
    date: '',
    file: 'https://i.imgur.com/SrU55KT.gif',
    comment: 'Something description',
    primary: true
  },
  {
    id: 3,
    title: 'Type Something Here...',
    date: '6/18',
    file: '',
    comment: '',
    primary: false
  },
  {
    id: 4,
    title: 'Type Something Here...',
    date: '',
    file: 'https://i.imgur.com/SrU55KT.gif',
    comment: '',
    primary: false
  }
]

const TaskList = () =>
  <ul className="list-group">
    {data.map((item) =><Task key={item.id} {...item}/>)}
  </ul>

export default TaskList