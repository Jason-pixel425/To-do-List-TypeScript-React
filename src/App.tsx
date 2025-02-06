import { useState} from 'react'
import { Todo } from './components/model.ts'
import './App.css'
import InputField from './components/InputField.tsx'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd= (e:React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos(prevTodos => {
        return [...prevTodos, {id:Date.now(), todo, isDone:false}]
      })
      setTodo("")
    }
  };



  return (
    <div className='App w-screen h-screen flex flex-col items-center bg-slate-50'>
      <span className="text-blue-700 text-[2.5rem] my-8 font-bold font-Merienda text-center border-none z-1 md: my-14 text-[2.19rem] ">Taskify</span>
      <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map(todo => <li>{todo.todo}</li>)}
    </div>
  )
}

export default App
