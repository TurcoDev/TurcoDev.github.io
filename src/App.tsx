// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../styles/App.scss'
import { Cover } from './components/Cover/Cover'
// import UnderConstruction from './components/UnderConstruction'
import Type from './components/Type'


function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      {/* <UnderConstruction /> */ }
      <div style={{ padding: 50, textAlign: "center",  }}>
        <Type />
      </div>
      < Cover />

    </>
  )
}

export default App
