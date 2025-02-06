import React from 'react'
import '../index.css'

const InputField:React.FC = () => {
    return (
        <form className="flex w-[90%] relative items-center">
            <input type='input' placeholder="Enter a task" className="input__box w-full rounded-[50px] px-5 py-7.5 text-3xl shadow-lg duration-200 
                                                                    focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] border border-gray-300 focus:outline-none" />
            <button className="input__submit absolute bg-blue-500 w-[3em] h-[3em] right-0 m-1 rounded-full border-none shadow-sm duration-200 text-white" type="submit">Go</button>
        </form>
    )
}

export default InputField