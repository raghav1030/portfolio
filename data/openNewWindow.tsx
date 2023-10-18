import React from 'react'
import { useCommand } from '../app/ContextApi/commandContext'
let openedWindow: Window | null = null; // Store the reference to the opened window




export const openNewWindow = (url: string) => {
    
    
    const command = useCommand();


    console.log(command?.getLastCommand())
    if (command?.getLastCommand() !== 'linkedin' &&
        command?.getLastCommand() !== 'blogs' &&
        command?.getLastCommand() !== 'github' &&
        command?.getLastCommand() !== 'resume' &&
        command?.getLastCommand() !== 'twitter') {
        return (
            `Opening in a new tab...
Successfully opened <a href=${url}>${url}</a> in a new tab.`)
    }

    // If a window is already open, check if it's closed
    if (openedWindow && !openedWindow.closed) {
        // If not closed, reuse the existing window
        (openedWindow).location.replace(url);
        openedWindow.focus();
        localStorage.clear()

    } else {
        // If closed or no window is open, open a new window
        openedWindow = window.open(url, "noopener, noreferrer");

    }

    return (
        `Opening in a new tab...
Successfully opened <a href=${url}>${url}</a> in a new tab.`)
};