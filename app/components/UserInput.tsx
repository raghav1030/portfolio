'use client'
import React, { useContext , useRef, useState } from 'react'
import { CommandContextApi } from '../ContextApi/commandContext'
import { useCommand } from '../ContextApi/commandContext'
import useOnClickAnywhere from '../hooks/useOnClickAnywhere'
import { commandsData } from '@/data/commands'
import CommandPrompt from './CommandPrompt'

const UserInput = () => {
  const updateCommand = useCommand();

  

  const [userCommand , setUserCommand] = useState('' as string);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateCommand?.updateCommand(userCommand);
    updateCommand?.updateCommandHistory(userCommand);
    setUserCommand('');
  }

  const inputRef = useRef(null);

  useOnClickAnywhere(inputRef)
  
  return (
    <form onSubmit={handleSubmit} className='mb-3' data-theme='dark'>
      <label className='flex gap-3   ' >
        <CommandPrompt/>
        <input 
        type="input" 
        className={`bg-transparent caret-purple-900 outline-none max-w-full  ${commandsData.find(command => command.command === userCommand) ? `text-success` : "text-error" }  `}
          value={userCommand}
          ref={inputRef}
          onChange={(e) => {
            setUserCommand(e.target.value)
          }
          }
        />
      </label>
    </form>
  )
}

export default UserInput