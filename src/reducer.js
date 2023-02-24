const initialState = {
  todos: [
    {id: 0, text: 'Learn React', completed: true},
    {id: 1, text: 'Learn Redux', completed: false, color: 'purple'},
    {id: 2, text: 'Build Something Fun', completed: false,color: 'blue'},
  ],
  filters: {
    status: 'All',
    colors: []
  }
}

//Initiail state as Def val
export default function appReducer(state = initialState, action) {
  //reducer usually looks at the action type field to decide what happens
  switch (action.type) {
    //Do something here based on different actions
    case 'todos/todoAdded': {
      return {
        //that has all existing state data
        ...state,
        //but has a new array for the 'todos' field
        todos: [
          //alll old to dos
          ...state.todos,
          //and the new todo object
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    default:
      //if this reducer doesn't recognize the action type or doesn't care about this specific caiton return the existing state unchanged
      return state
  }
}