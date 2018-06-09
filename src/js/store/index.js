import {createStore, combineReducers, applyMiddleware} from 'redux'

const LOCAL_STORAGE_KEY = 'todos'

const stateData = {
  editable: false,
  todos: []
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
    combineReducers({}),
    (localStorage[LOCAL_STORAGE_KEY]) ?
      JSON.parse(localStorage[LOCAL_STORAGE_KEY]) :
      initialState
  )

export default storeFactory