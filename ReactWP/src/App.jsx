import { useState } from 'react'
import reactLogo from './assets/react.svg'
import wpLogo from './assets/wpLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(''); 

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={wpLogo} className="logo react" alt="WP logo" />
      </div>

      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
      
      <div className="card">
        <h4>Type in above box and Click on the button below</h4>
        <h5>This is the simple test of useState!!</h5>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
