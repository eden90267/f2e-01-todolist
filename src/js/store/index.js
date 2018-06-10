import {createStore, combineReducers, applyMiddleware} from 'redux'
import {editable, todos} from './reducer'

const LOCAL_STORAGE_KEY = 'todos'

const stateData = {
  editable: false,
  todos: [
    {
      id: 1,
      title: 'Type Something Here...',
      deadline: '5/14',
      file: 'https://i.imgur.com/SrU55KT.gif',
      comment: 'Something description',
      primary: true
    },
    {
      id: 2,
      title: 'Type Something Here...',
      deadline: '',
      file: 'https://i.imgur.com/SrU55KT.gif',
      comment: 'Something description',
      primary: true
    },
    {
      id: 3,
      title: 'Type Something Here...',
      deadline: '6/18',
      file: '',
      comment: '',
      primary: false
    },
    {
      id: 4,
      title: 'Type Something Here...',
      deadline: '',
      file: 'https://i.imgur.com/SrU55KT.gif',
      comment: '',
      primary: false
    }
  ]
}

const logger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const saver = store => next => action => {
  let result = next(action)
  localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({editable, todos}),
    (localStorage[LOCAL_STORAGE_KEY]) ?
      JSON.parse(localStorage[LOCAL_STORAGE_KEY]) :
      initialState
  )

export default storeFactory