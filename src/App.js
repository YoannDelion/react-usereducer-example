import { useReducer } from 'react'
import './App.css'

function App() {

  // initial state could have be only 0
  const initialState = { count: 0 }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + (action.payload || 1) }
      case 'DECREMENT':
        // here it's possible to add some logic
        // such as blocking count to min 0 
        return { count: state.count - (action.payload || 1) }
      case 'RESET':
        return initialState
      default:
        throw Error('Unhandled action type ' + action.type)
    }
  }

  // This is an example of init function for the useReducer
  // If we use it, the second parameter of useReducer should directly be 0
  // const init = initialCount => ({ count: initialCount })

  // remeber that useReducer can take a third argument that is a init function for the state
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrémenter</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Décrementer</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>Incrémenter +10</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>Décrementer -10</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

export default App
