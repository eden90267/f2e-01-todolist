import React from 'react'
import StarO from 'react-icons/lib/fa/star-o'
import Star from 'react-icons/lib/fa/star'
import Pencil from 'react-icons/lib/fa/pencil'
import Calendar from 'react-icons/lib/fa/calendar'
import File from 'react-icons/lib/fa/file'
import Comment from 'react-icons/lib/fa/comment'

import 'components/Task.scss'

const Task = ({title, date, file, comment, primary}) =>
  <li className={'list-group-item rounded border-0 mb-2 task' + (primary ? ' active' : '')}>
    <ul className="list-unstyled d-flex my-1">
      <li className="mr-3">
        <input type="checkbox"/>
      </li>
      <li>
        <div>{title}</div>
        <ul className="list-unstyled d-flex mt-1">
          {date && <li className="mr-2"><Calendar color="#888" className="mr-1" size={14}/><small style={{color: '#888'}}>{date}</small></li>}
          {file && <li className="mr-2"><File color="#888" size={14}/></li>}
          {comment && <li className="mr-2"><Comment color="#888" size={14}/></li>}
        </ul>
      </li>
      <li className="ml-auto mr-3">
        {primary ? <Star color="#F5A623"/> : <StarO color="#F5A623"/>}
      </li>
      <li>
        <Pencil/>
      </li>
    </ul>
  </li>

export default Task
