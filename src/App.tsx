import { useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  
  return (
    <div className='App'>
      <span className="text-blue-500">Taskify</span>
      <h1>Hello world</h1>
    </div>
  )
}

export default App
