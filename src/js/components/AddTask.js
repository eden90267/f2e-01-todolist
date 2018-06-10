import React from 'react'
import EditTask from './EditTask'

import 'components/ui/AddTask.scss'

const AddTask = ({editable = false, onFocus = f => f}) =>
  <div>
    {!editable ?
      <div className="input-group mb-3 addTask">
        <div className="input-group-prepend">
          <div className="input-group-text">＋</div>
        </div>
        <input type="text" className="form-control" placeholder="Add Task" onFocus={onFocus}/>
      </div>
      :
      <EditTask/>
    }
  </div>

export default AddTask