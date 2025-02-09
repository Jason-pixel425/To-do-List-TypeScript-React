import { Todo } from './model'
import { useState } from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { FaSave } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { MdDone } from "react-icons/md"

interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    // If user editing state is active tracking
    const [edit, setEdit] = useState<boolean>(false)
    // The new string the user enters to replace todo.todo | default the current value of todo.todo
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

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
    }

    const handleDelete = (todoId: number) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todoItem => todoItem.id !== todoId)
        })
    }

    const handleEditState = () => {
        if (!todo.isDone){
            setEdit(prevEdit => !prevEdit)
        }
    }

    const handleEdit = (e: React.FormEvent, todoId: number) => {
        e.preventDefault()
        setTodos((prevTodos: Todo[]) => {
            return prevTodos.map(todoItem => {
                if (todoItem.id === todoId) {
                    return {...todoItem, todo: editTodo}
                } else{
                    return todoItem
                }
            })
        })
        setEdit(false)
    }
   

    return (
        <form className="todos_single flex w-full lg:w-[40%] rounded-sm p-5 mt-4 bg-[url(https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg)]" onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input className="bg-white grow text-xl p-1 border-none focus:outline-none" value={editTodo} onChange={(e => setEditTodo(e.target.value))}/>
                ): (todo.isDone === true ? (
                        <s className="todos_single-text grow p-1 text-left border-none text-[1.25rem] focus:outline-none">{todo.todo}</s>
                        ) : (
                            <span className="todos_single-text grow p-1 text-left border-none text-[1.25rem] focus:outline-none">
                                {todo.todo}
                            </span>
                        )

                )}
  
            <div className="flex p-1 items-center">
                {edit ? (
                        <>
                        <span className="icon ml-2 text-2xl cursor-pointer" onClick={(e) => handleEdit(e, todo.id)}><FaSave/></span>
                        <span className="icon ml-2 text-3xl cursor-pointer" onClick={() => handleEditState()}><IoExit /></span>
                        </>
                    ):(
                        <>
                        <span className="icon ml-2 text-2xl cursor-pointer" onClick={() => handleEditState()}><AiFillEdit /></span>
                        <span className="icon ml-2 text-2xl cursor-pointer" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                        <span className="icon ml-2 text-2xl cursor-pointer" onClick={() => handleDone(todo.id)}><MdDone /></span>
                        </>
                        
                    )}
            </div>
        </form>
    )
}

export default SingleTodo