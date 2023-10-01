import { useCommand } from "@/app/ContextApi/commandContext";
import React from "react";


export const renderDefault = () => {
    
    const command = useCommand();
    
    
    return(
        <div>
            <p>shell : command not found : {command?.commandHistory[0]}. Try 'help' to get started</p>
        </div>
    )
}