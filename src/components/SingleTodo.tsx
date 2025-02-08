import { Todo } from './model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"

interface Props {
    todo: Todo,
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const handleDone = (todoId: number)  => {
        setTodos(prevTodos => {
            return prevTodos.map(todoItem => {
                if (todoItem.id === todoId) {
                    return {...todoItem, isDone: !todoItem.isDone}
                } else {
                    return todoItem
                }
            })
        })
        // const completedTodo = todos.filter(todo => todo.id === todoId)
    }

    return (
        <form className="todos_single flex w-full lg:w-[40%] rounded-sm p-5 mt-4 bg-[url(https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg)]">
            {todo.isDone === true ? (
            <s className="todos_single-text grow p-1 text-left border-none text-[1.25rem] focus:outline-none">{todo.todo}</s>
            ) : (
                <span className="todos_single-text grow p-1 text-left border-none text-[1.25rem] focus:outline-none">
                    {todo.todo}
                </span>
            )}
            <div className="flex p-1 items-center">
                <span className="icon ml-2 text-2xl cursor-pointer"><AiFillEdit /></span>
                <span className="icon ml-2 text-2xl cursor-pointer"><AiFillDelete /></span>
                <span className="icon ml-2 text-2xl cursor-pointer" onClick={() => handleDone(todo.id)}><MdDone /></span>
            </div>
        </form>
    )
}

export default SingleTodo