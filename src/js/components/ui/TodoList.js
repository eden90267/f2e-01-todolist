import React from 'react'
import {Route} from "react-router-dom";
import Menu from "./Menu";
import AddTask from "./AddTask";
import TaskList from "./TaskList";


const TodoList = () =>
  <div>
    <Route component={Menu}/>
    <div className="wrapper mt-3">
      <AddTask/>
      <TaskList/>
    </div>
  </div>

export default TodoList