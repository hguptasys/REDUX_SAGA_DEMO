import * as TYPES from '../types/Type'

export const productsInitialState = []
const data = (state = productsInitialState, action) => {
  switch (action.type) {
    // ==================GET_DATA=========================
    case TYPES.GET_DATA:
      return [...action.payload]
    // ================EDIT_DATA========================
    case TYPES.EDIT_DATA:
      console.log('EDIT_DATA', state)
      const todoIndex = state.findIndex(
        (updateTodo) => updateTodo.id === action.id,
      )
      state[todoIndex] = action.payload
      console.log('todoIndex', state)

      return state
        
      
    // ================REMOVE_DATA========================
    case TYPES.REMOVE_DATA:
      console.log('DELETE_TODO', action.payload)
      const data = state.filter((todo) => todo.id !== action.payload)
      console.log('DELETE_TODO', data)
      return [...data]

    default:
      return state
  }
}

export default data
