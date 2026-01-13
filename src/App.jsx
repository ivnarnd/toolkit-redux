
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incremented } from './store/slices/counter'

function App() {

  const {counter} = useSelector((state) => state.counter) // Example usage of useSelector
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>dispatch(incremented())}>
          count is {counter}
        </button>
      </div>
    </>
  )
}

export default App
