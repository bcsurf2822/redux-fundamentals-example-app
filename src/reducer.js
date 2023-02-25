import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer

// export default function rootReducer(state = {}, action) {
//   //always return a new object for the root state
//   return {
//     //value of 'state.todos'is whatever the todos reducer retruns
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action)
//   }
// }