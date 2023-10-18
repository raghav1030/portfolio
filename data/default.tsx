import { useCommand } from "@/app/ContextApi/commandContext";
import React from "react";


export const renderDefault = (command: string , isTerminalCommand : boolean = false): string => {
  
  
  const renderCommand = () => {
    return '<span className="error">' + command.trim().toLowerCase() + '</span>';
  };

  if(isTerminalCommand){
    return 'shell : command not found : ' + renderCommand() + '. Try \'help\' to get started' 
    + 
    `\n \nThis is not a real terminal and doesn't support Linux commands like 'cd', 'ls', or 'cat' as of now. It's designed for an interactive experience. If you have suggestions or just want to give any feedback, ping me on my socials. Just simply type 'contactme'.`
    ;
  }

  else{

    return 'shell : command not found : ' + renderCommand() + '. Try \'help\' to get started';
  }

};
