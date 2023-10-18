'use client'
import UserInput from './components/UserInput';
import { useCommand } from './ContextApi/commandContext';
import History from './components/History';
import init from '@/data/init';



export default function Home() {


  return (
    <main className=' p-4 ' >
      {

        <pre className='mb-3' >{init()}</pre>
      }
      <History />
      <UserInput />


    </main>
  )
}
