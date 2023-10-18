'use client'
import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import UserInput from "../components/UserInput";
import axios from "axios";
import { Octokit } from "octokit";

interface CommandContextProviderProps {
    children: React.ReactNode;
}

interface CommandContext{
    command : string ,
    updateCommand : (command : string ) => void,
    commandHistory : string[],
    updateCommandHistory : (newCommand : string ) => void
    getLastCommand : () => string,
    getPreviousCommand : () => string | undefined,
    getNextCommand : () => string | undefined,
    clearCommandHistory : () => void,
    
}

export const useCommand = () => useContext(CommandContextApi);

export const CommandContextApi = createContext <CommandContext | null >(null);

export const CommandContextProvider = ({children}  : CommandContextProviderProps) => {

    const [command , setCommand] = useState('');
    const [commandHistory , setCommandHistory] = useState([] as string[])
    let i : number = commandHistory.length;
    const COMMAND_HISTORY_KEY = "commandHistory";


   


    const getPreviousCommand = () : string  | undefined=> {
        if(i > 0){
            return commandHistory[--i];
        }
        else return commandHistory[i];
    }

    const getNextCommand = () : string | undefined => {
        if(i < commandHistory.length - 1){
            return commandHistory[++i];
        }
        if(i === commandHistory.length - 1) return ('' as string)
        else return commandHistory[i];
    }

    const updateCommandHistory = (newCommand : string ) => {
        setCommandHistory([...commandHistory , newCommand]);
    }

    const updateCommand  = (newCommand : string )  => {
        setCommand(newCommand );
        i = commandHistory.length;
    }

    const getLastCommand = () : string =>{
        return commandHistory[commandHistory.length - 1];
    }

    const clearCommandHistory = () => {
        setCommandHistory([]);
        setCommand('');
    }
    return (
        <CommandContextApi.Provider value={{command , updateCommand, updateCommandHistory, commandHistory, getLastCommand, getPreviousCommand, getNextCommand , clearCommandHistory}}>
            {children}
        </CommandContextApi.Provider>
    )
}