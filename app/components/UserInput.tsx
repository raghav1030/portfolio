'use client'
import React, { useContext , useEffect, useRef, useState } from 'react'
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


    if(userCommand === '') return;
    if (userCommand === 'clear'){
      updateCommand?.clearCommandHistory();
      setUserCommand('');

      return;
    }
    updateCommand?.updateCommand(userCommand);
    updateCommand?.updateCommandHistory(userCommand);
    setUserCommand('');

    if(inputRef.current ){
      inputRef.current.scrollIntoView({ behavior: 'smooth' }); ;
    }

  }



  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    
    if(e.key === 'ArrowUp') {
      e.preventDefault();
      setUserCommand(updateCommand?.getPreviousCommand() as string);
    }
    else if(e.key === 'ArrowDown') {
      e.preventDefault();
      setUserCommand(updateCommand?.getNextCommand() as string);
      inputRef.current?.scrollIntoView({ behavior: 'smooth' }); 

    }
    else if(e.key === 'Tab') {
      e.preventDefault();
      const command = commandsData.find(command => command.command.startsWith(userCommand.trim().toLocaleLowerCase()));
      inputRef.current?.scrollIntoView({ behavior: 'smooth' }); 

      if(command) {
        setUserCommand(command.command);
        inputRef.current?.scrollIntoView({ behavior: 'smooth' }); 

      }
    }

  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [userCommand, handleKeyDown])
  
  useOnClickAnywhere(inputRef)
  
  return (
    <form onSubmit={handleSubmit} className='mb-3 flex' data-theme='dark'>
      <label className='flex gap-3 flex-grow  ' >
        <CommandPrompt/>
        <input 
        type="input" 
        className={`bg-transparent leading-3 outline-none flex-grow w-full font-bold  ${commandsData.find(command => userCommand && command.command === userCommand.trim().toLocaleLowerCase()) ? `text-success` : "text-error" }  `}
          value={userCommand}
          ref={inputRef}
          autoFocus={true}
          autoComplete='off'
          spellCheck='false'
          onKeyDown = {(e) => handleKeyDown(e)}
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