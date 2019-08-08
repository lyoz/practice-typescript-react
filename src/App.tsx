import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App: React.FC = () => {
  const value = useSelector(state => state)
  const dispatch = useDispatch()
  const handleDecrement = () => dispatch({ type: 'DECREMENT' })
  const handleIncrement = () => dispatch({ type: 'INCREMENT' })
  return (
    <>
      Clicked: {value} times
      <hr />
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrement}>+1</button>
    </>
  )
}

export default App
