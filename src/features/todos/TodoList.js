import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

import { selectFilteredTodoIds } from './todosSlice'

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds)
  const loadingStatus = useSelector((state) => state.todos.status)

  if (loadingStatus === 'loading') {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    )
  }

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList


//Fortunately, useSelector automatically subscribes to the Redux store for us! That way, any time an action is dispatched, it will call its selector function again right away. If the value returned by the selector changes from the last time it ran, useSelector will force our component to re-render with the new data. All we have to do is call useSelector() once in our component, and it does the rest of the work for us

// // Bad: always returning a new reference
// const selectTodoDescriptions = state => {
//   // This creates a new array reference!
//   return state.todos.map(todo => todo.text)
// }