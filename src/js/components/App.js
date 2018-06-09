import React from 'react'
import {Route} from 'react-router-dom'
import TodoList from './ui/TodoList'

const App = () =>
  <Route path="/" component={TodoList}/>

export default App