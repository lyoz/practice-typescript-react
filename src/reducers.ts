const rootReducer = (state: number = 0, action: { type: string }) => {
  switch (action.type) {
    case 'DECREMENT':
      return state - 1
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

export default rootReducer
