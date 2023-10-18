import { useCommand } from "@/app/ContextApi/commandContext";
import React from "react";


export const renderDefault = (command: string): string => {
  const renderCommand = () => {
    return '<span className="error">' + command + '</span>';
  };

  return 'shell : command not found : ' + renderCommand() + '. Try \'help\' to get started';
};
