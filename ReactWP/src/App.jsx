import { useState } from 'react'
import reactLogo from './assets/react.svg'
import wpLogo from './assets/wpLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={wpLogo} className="logo react" alt="WP logo" />
      </div>

      <h1>React + WP</h1>

      <div className="card">
        <h4>Click on the button below to increase the value by 1</h4>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
