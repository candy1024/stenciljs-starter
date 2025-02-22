import { useState } from 'react'
import { MyButton, MyComponent, defineCustomElements } from 'react-lib/lib';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

defineCustomElements();

function App() {
  const title = document.title ?? ''

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <>
      <MyComponent first="Your" middle={title} last="Name" />
      <MyButton display={show}>
        <span slot="btn-head" id="btnIcon">ICON</span>
      </MyButton>

      <button onClick={() => setShow((show) => !show)}>switch</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
