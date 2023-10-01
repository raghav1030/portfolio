'use client'
import UserInput from './components/UserInput';
import { useCommand } from './ContextApi/commandContext';
import History from './components/History';



export default function Home() {

  const command = useCommand()

  return (
    <main className=' p-4 ' >
      <History />
      <UserInput/>

    </main>
  )
}
