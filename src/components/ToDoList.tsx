import '../App.css'
import { Todo } from './model'
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }) => {

    // const todoArr = todos.map(todo => {
    //      return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
    // })
    

    return (
        <div className="container flex flex-col md:flex-row text-wrap mx-auto items-center w-[95%] mt-2 justify-beteween md:items-start">
            <div className="todos w-[80%] mb-4 rounded-sm md:w-1/2 text-wrap p-5 flex flex-col items-center bg-cyan-500">
            <h2 className="text-2xl font-Merienda">Active Tasks</h2>
            { todos.map(todo => {
                return todo.isDone ? null : <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            })
            }
            </div>
            <div className="todos w-[80%] mb-4 rounded-sm md:w-1/2 text-wrap p-5 flex flex-col items-center bg-rose-300 items-center">
            <h2 className="text-2xl font-Merienda">Completed Tasks</h2>
            { todos.map((todo) => {
                return todo.isDone ? <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} /> : null
            })
            }
            </div>
        </div>
    )
}
//return todo.isDone ? <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} /> : null
export default ToDoList