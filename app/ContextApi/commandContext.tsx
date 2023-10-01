'use client'
import React, { SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
import UserInput from "../components/UserInput";

interface CommandContextProviderProps {
    children: React.ReactNode;
}

interface CommandContext{
    command : string ,
    updateCommand : (command : string ) => void,
    commandHistory : string[],
    updateCommandHistory : (newCommand : string ) => void
}

export const useCommand = () => useContext(CommandContextApi);

export const CommandContextApi = createContext <CommandContext | null >(null);

export const CommandContextProvider = ({children}  : CommandContextProviderProps) => {

    const [command , setCommand] = useState('');
    const [commandHistory , setCommandHistory] = useState([] as string[])

    const updateCommandHistory = (newCommand : string ) => {
        setCommandHistory([...commandHistory , newCommand]);
    }

    const updateCommand  = (newCommand : string )  => {
        setCommand(newCommand );
    }
    return (
        <CommandContextApi.Provider value={{command , updateCommand, updateCommandHistory, commandHistory}}>
            {children}
        </CommandContextApi.Provider>
    )
}