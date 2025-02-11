import { useState} from 'react'
import { Todo } from './components/model.ts'
import './App.css'
import InputField from './components/InputField.tsx'
import ToDoList from './components/ToDoList.tsx'
import {DragDropContext} from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd= (e:React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos(prevTodos => {
        return [...prevTodos, {id:Date.now(), todo, isDone:false}]
      })
      setTodo("")
    }
  };

const onDragEnd = (result: DropResult) => {
  const {source, destination} = result
  if(!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
    return
  }
  let add;
  let active= todos
  let complete = completedTodos

  if(source.droppableId === 'TodosList') {
    add = active[source.index]
    active.splice(source.index, 1)
  } else {
    add = complete[source.index]
    complete.splice(source.index, 1)
  }
  
  if(destination.droppableId === 'TodosList') {
    active.splice(destination.index, 0, add)
  } else {
    complete.splice(destination.index, 0, add)
  }

  setCompletedTodos(complete)
  setTodos(active)


}

  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <div className='App w-screen h-screen flex flex-col items-center bg-slate-50'>
        <span className="text-blue-700 text-[2.5rem] my-8 font-bold font-Merienda text-center border-none z-1 md: my-14 text-[2.19rem] ">Taskify</span>
        <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <ToDoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
        {/* {todos.map(todo => <li>{todo.todo}</li>)} */}
      </div>
    </DragDropContext>
  )
}

export default App
