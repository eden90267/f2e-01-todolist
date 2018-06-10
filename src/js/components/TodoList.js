import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Menu from './Menu'
import AddTask from './AddTask'
import TaskList from './TaskList'
import {changeEditable} from "../actions";


const TodoList = ({data, editable, onFocus}) => (
  <div>
    <Route component={Menu}/>
    <div className="wrapper mt-3">
      <AddTask editable={editable} onFocus={onFocus}/>
      <TaskList data={data}/>
    </div>
  </div>
)

export default connect(
  // mapStateToProps
  ({todos, editable}) => ({
    data: todos,
    editable
  }),
  // mapDispatchToProps
  (dispatch) => ({
    onFocus() {
      dispatch(changeEditable())
    }
  })
)(TodoList)