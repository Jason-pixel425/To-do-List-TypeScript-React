import React, { useRef } from 'react'
import '../index.css'

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}


const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className="flex w-[90%] relative items-center" onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
        }}>
            <input type='input' 
            ref={inputRef}
            value={todo} 
            onChange={(e => setTodo(e.target.value))}
             placeholder="Enter a task" className="input__box w-full rounded-[50px] px-5 py-7.5 text-3xl shadow-lg duration-200 
                                                                    focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] border border-gray-300 focus:outline-none" />
            <button className="input__submit absolute bg-blue-500 w-[3em] h-[3em] right-0 m-1 rounded-full border-none shadow-lg duration-200 text-white hover:bg-blue-400 active:scale-85 active:shadow-sm" type="submit">Go</button>
        </form>
    )
}

export default InputField