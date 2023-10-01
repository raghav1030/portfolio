// data/commandsData.ts

export interface CommandData {
    command: string;
    category: string;
    response: string; // Simulating a terminal-like response
  }
  
  export const commandsData: CommandData[] = [
    { command: "whoami", category: "info", response: "Display personal information." },
    { command: "certs", category: "info", response: "List certifications." },
    { command: "edu", category: "info", response: "Show educational background." },
    { command: "work", category: "info", response: "Display work experience." },
    { command: "projects", category: "info", response: "List worked-on projects." },
    { command: "skills", category: "info", response: "Show skills." },
    { command: "social", category: "info", response: "Display social links." },
    { command: "contact", category: "info", response: "Show contact information." },
    { command: "help", category: "info", response: "Display available commands." },
    { command: "resume", category: "info", response: "Get my resume." },
    { command: "blog", category: "info", response: "Check out my blog on Hashnode." },
    // Add more commands as needed
];

  


export const renderHelp = (commandsData: CommandData[]): JSX.Element => {
  return (
    <div data-theme='myTheme' className="help">
      <h2 className="text- ">Available Commands</h2>
      <ul>
        {commandsData.map(command => (
          
            <li key={command.command}>
              <strong className="">{command.command}</strong> - {command.response}
            </li>
            
          
        ))}
      </ul>
    </div>
  );
};
