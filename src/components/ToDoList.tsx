import '../App.css'
import { Todo } from './model'
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }) => {
    
    const todoArr = todos.map(todo => {
         return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
    })

    return (
        <div className="todos flex justify-evenly w-[90%] flex-wrap">
            <ul className="flex justify-evenly w-[90%] flex-wrap"> 
                {todoArr}
            </ul>
        </div>
    )
}

export default ToDoList