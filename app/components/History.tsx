import React, { FC, useState } from "react";
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


const History: FC = () => {
  const command = useCommand();
  

  const renderResponse = (command: string) => {
    switch (command) {
      case "about":
        // Handle 'about' command
        console.log("About command entered");
        return renderAbout(about);

      case "projects":
        // Handle 'projects' command
        console.log("Projects command entered");
        return renderProject(projects);

      case "contact":
        // Handle 'contact' command
        // setContent(contact);
        console.log("Contact command entered");
        break;

      // Add more cases for other commands

      case "experience":
        // Handle 'experience' command
        console.log("Experience command entered");
        return renderExperience(experience);

      case "certifications":
        // Handle 'experience' command
        console.log("Certifications command entered");
        return renderCertifications(certifications);

      case "education":
        // Handle 'experience' command
        console.log("Education command entered");
        return renderEducation(education);

      case "help":
        // Handle 'experience' command
        console.log("help command entered");
        return renderHelp(commandsData);

      default:
        // Handle unknown command
        console.log(`Unknown command: ${command}`);
        return renderDefault();
    }
  };

  return (
    <div data-theme="myTheme" className="">
      {Array.isArray(command?.commandHistory) &&
        command?.commandHistory.length > 0 &&
        command?.commandHistory.map((command, index) => (
          <div className="mb-4" key={index + command}>
            <div className="flex gap-3">
              <CommandPrompt /> <p className={`${commandsData.find(comm => comm.command === command) ? "text-success"  : "text-error" }`}>{command}</p>
            </div>
            <div>{renderResponse(command)}</div>
              </div>
        ))}
    </div>
  );
};

export default History;
