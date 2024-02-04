import React, { FC, useEffect, useRef, useState } from "react";
import { useCommand } from "../ContextApi/commandContext";
import { about, renderAbout } from "@/data/about";
// import { renderAbout } from "../templates/renderAbout";
import { experience, renderExperience } from "@/data/experience";
import { certifications, renderCertifications } from "@/data/certifcations";
import { education, renderEducation } from "@/data/education";
import { projects, renderProject } from "@/data/projects";
import { commandsData, renderHelp } from "@/data/commands";
import CommandPrompt from "./CommandPrompt";
import { renderDefault } from "@/data/default";
import init from "@/data/init";
import { renderSkills } from "@/data/skills";
import { renderContact } from "@/data/contact";
import { openNewWindow } from "@/data/openNewWindow";
import { renderContributions } from "@/data/contributions";

const History: FC = () => {
  const command = useCommand();
  const historyRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollIntoView({ behavior: 'smooth' });;
    }
  }, [command?.commandHistory])

  const renderResponse = (inputCommand: string): TrustedHTML | string => {


    switch (inputCommand.trim().toLocaleLowerCase()) {
      case "whoami":
        // Handle 'about' command
        console.log("About command entered");
        return renderAbout(about);

      case "myprojects":
        // Handle 'projects' command
        console.log("Projects command entered");
        return renderProject(projects);

      case "work":
        // Handle 'experience' command
        console.log("Experience command entered");
        return renderExperience(experience);

      case "certs":
        // Handle 'experience' command
        console.log("Certifications command entered");
        return renderCertifications(certifications);

      case "edu":
        // Handle 'experience' command
        console.log("Education command entered");
        return renderEducation(education);

      case "help":
        // Handle 'experience' command
        console.log("help command entered");
        return renderHelp(commandsData);

      case "init":
        command?.clearCommandHistory();
        return init();

      case "skills":
        return renderSkills()

      case "contactme":
        return renderContact()

      case "linkedin":
        return openNewWindow("https://www.linkedin.com/in/raghav-gandhi-766b4917b/");


      case "github":
        return openNewWindow("https://github.com/raghav1030")

      case "twitter":

        return openNewWindow("https://twitter.com/RaghavGandhi14");

      case "resume":
        return openNewWindow("https://drive.google.com/file/d/1yFkUzem8N11HgVmHGkppHpM2rfC0RWO6/view?usp=sharing")

      case "blogs":
        return openNewWindow("https://hashnode.com/@rg1030");

      case "contributions":

        return renderContributions();


      default:
        // Handle unknown command
        console.log(`Unknown command: ${inputCommand}`);
        
        if(inputCommand === 'ls' || inputCommand === 'cat' || inputCommand === 'cd' || inputCommand === 'rm' || inputCommand === 'mkdir'){
          return renderDefault(inputCommand , true);
        }
        return renderDefault(inputCommand);
    }
  };


  return (
    <div data-theme="myTheme" className="">
      {Array.isArray(command?.commandHistory) &&
      command?.commandHistory &&
        command?.commandHistory.length > 0 &&
        command?.commandHistory.map((command, index) => (
          <div className="mb-4  flex flex-col  whitespace-nowrap " key={index + command}>
            <div className="flex gap-3 ">
              <CommandPrompt /> <p className={`${commandsData.find(comm => command && comm.command === command.trim().toLocaleLowerCase()) ? "text-success" : "text-error"} font-bold `}>{command}</p>
            </div>

            <pre ref={historyRef} className="whitespace-pre-wrap  " dangerouslySetInnerHTML={{ __html: renderResponse(command) }}></pre>
            <br />
          </div>
        ))}
    </div>
  );
};

export default History;
