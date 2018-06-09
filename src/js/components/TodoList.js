import React from 'react'
import {Route} from "react-router-dom";
import Menu from "./Menu";
import Todo from "./Todo";

const TodoList = () =>
  <div>
    <Route component={Menu}/>
    <div className="wrapper mt-3">
      <Todo/>
    </div>
  </div>

export default TodoList