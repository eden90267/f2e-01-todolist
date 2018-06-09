import React from 'react'
import StarO from 'react-icons/lib/fa/star-o'
import Star from 'react-icons/lib/fa/star'
import Pencil from 'react-icons/lib/fa/pencil'
import Calendar from 'react-icons/lib/fa/calendar'
import File from 'react-icons/lib/fa/file'
import Comment from 'react-icons/lib/fa/comment'

const EditTask = () =>
  <ul className="list-group">
    <li className="list-group-item rounded border-0 mb-2 task">
      <ul className="list-unstyled d-flex my-1 task-content">
        <li>
          <input type="checkbox"/>
        </li>
        <li style={{width: '475px'}}>
          <div>
            <input type="text" className="form-control" placeholder="Add Task"/>
          </div>
          <ul className="list-unstyled mt-1">
            <li>
              <Calendar color="#888" className="mr-1" size={14}/></li>
            <li>
              <File color="#888" size={14}/>
            </li>
            <li>
              <Comment color="#888" size={14}/>
            </li>
          </ul>
        </li>
        <li className="ml-auto mr-3">
          <StarO color="#F5A623" size={20}/>
        </li>
        <li>
          <Pencil size={20}/>
        </li>
      </ul>
    </li>
  </ul>

export default EditTask