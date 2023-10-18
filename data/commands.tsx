// data/commandsData.ts

export interface CommandData {
  command: string;
  category: string;
  response: string; // Simulating a terminal-like response
}

export const commandsData: CommandData[] = [
  { command: "help", category: "info", response: "Display available commands." },
  { command: "whoami", category: "info", response: "Display personal information." },
  { command: "certs", category: "info", response: "List certifications." },
  { command: "edu", category: "info", response: "Show educational background." },
  { command: "work", category: "info", response: "Display work experience." },
  { command: "myprojects", category: "info", response: "List worked-on projects." },
  { command: "contributions", category: "info", response: "List my recent open source contributions."},
  { command: "resume", category: "info", response: "Get my resume." },
  { command: "skills", category: "info", response: "Show skills." },
  { command: "clear", category: "info", response: "Clears up the terminal" },
  { command: "init", category: "info", response: "Initializes the terminal"},
  { command: "contactme", category: "info", response: "Show contact information." },
  { command : "twitter", category: "info", response: "Follow me on twitter." },
  { command : "github", category: "info", response: "Check out my github." },
  { command : "linkedin", category: "info", response: "Connect with me on linkedin." },
  { command: "blogs", category: "info", response: "Check out my blogs on Hashnode." },
  // Add more commands as needed
];


const formattedCommands = commandsData.map(command => `  - ${command.command} ~ ${command.response}`).join('\n');

export const renderHelp = (commandsData: CommandData[]) => {
  return (
`
=== Terminal Help ===

Terminal Features  

1. Tab Completion:
   - Use tab to autocomplete commands and paths.

2. Command History:
   - Use the up and down arrow keys to navigate through previous commands.

3. Clear Screen:
   - Type 'clear' to clear the terminal screen.

4. Help:
   - Type 'help' to display this help section.

5. User Info:
   - The username before the @ symbol is the current user IP address.


Available Commands :  

${formattedCommands}

Enjoy exploring the terminal!`
  );
};
