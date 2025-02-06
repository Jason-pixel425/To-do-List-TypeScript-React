import './App.css'
import InputField from './components/InputField.tsx'

const App: React.FC = () => {
  

  return (
    <div className='App w-screen h-screen flex flex-col items-center bg-slate-50'>
      <span className="text-blue-700 text-[2.5rem] my-8 font-bold font-Merienda text-center border-none z-1 md: my-14 text-[2.19rem] ">Taskify</span>
      <InputField />
      
    </div>
  )
}

export default App
