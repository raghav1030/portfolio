// data/projectData.ts

import { FC } from "react";

// data/projectData.ts

export interface FrontendProject {
  title: string;
  description: string;
  technologies: string[];
  githubRepo: string;
}

export interface FullStackProject {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  githubRepo: string;
}

export interface OtherProject {
  title: string;
  description: string;
  note?: string; // Added a note field
}

export interface ProjectData {
  frontendProjects: FrontendProject[];
  fullStackProjects: FullStackProject[];
  otherProjects: OtherProject[];
}

export const projects : ProjectData = {
  frontendProjects: [
    {
      title: 'Blog Content Website',
      description:
        'Developed a responsive React-based Blog Website with seamless routing. Implemented article categorization by tags and categories. Demonstrated expertise in Routing, React Hooks, React.js, JavaScript, and CSS.',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      githubRepo: 'https://github.com/raghav1030/Blog-Content',
    },
    {
      title: 'Dev Detective',
      description:
        'Spearheaded the creation of a user-friendly web app for GitHub profile exploration. Integrated real-time data from GitHub API for detailed insights. Showcased expertise in GitHub, JavaScript, CSS, API Integration, and HTML.',
      technologies: ['GitHub API', 'JavaScript', 'CSS', 'HTML'],
      githubRepo: 'https://github.com/raghav1030/Dev-Detective',
    },
  ],
  fullStackProjects: [
    {
      title: 'Devflix - Full Stack e-Learning WebApp',
      description:
        'Led the development of a comprehensive full-stack e-learning platform. Empowered educators to curate, upload, and sell courses, leading to a remarkable 40% increase in course enrollment. Implemented robust secure payment processing and streamlined file uploads. Demonstrated expertise in CI/CD, MongoDB, Express.js, Cloudinary, React.js, Nodemailer, Node.js, and implemented many npm libraries. Efficiently managed project tasks and responsibilities, ensuring seamless project delivery.',
      achievements: [
        'Empowered educators to curate, upload, and sell courses, leading to a remarkable 40% increase in course enrollment.',
        'Implemented robust secure payment processing and streamlined file uploads.',
      ],
      technologies: ['CI/CD', 'MongoDB', 'Express.js', 'Cloudinary', 'React.js', 'Nodemailer', 'Node.js'],
      githubRepo: 'https://github.com/raghav1030/Devflix',
    },
  ],
  otherProjects: [
    {
      title: 'Other Exciting and Innovative Projects',
      description:
        'I have a number of other exciting and innovative projects showcased on my GitHub profile that I made during my learning journey, awaiting your exploration! Feel free to visit my GitHub at https://github.com/raghav1030/ to delve deeper into my work.',
      note: 'Note: The following is just a glimpse of my projects. Explore more on my GitHub.',
    },
  ],
};


// Import statements...

export const renderProject  = (project: ProjectData) => {
  const renderSingleProject = (singleProject: FrontendProject | FullStackProject | OtherProject) => {
    return (
      <div className="" key={singleProject.title}   >
        <h1 className="text"  >{singleProject.title}</h1>
        <p>{singleProject.description}</p>

        {singleProject.hasOwnProperty('technologies') && (
          <div className="flex ">
            <pre className=" text-purple-400" >Technologies : </pre>
            <ul className="flex ">
              {(singleProject as FrontendProject | FullStackProject).technologies.map((tech, index) => (
                <li key={index}>
                  <pre>{tech}<span>{index === (singleProject as FrontendProject | FullStackProject).technologies.length-1 ? "." : "," }</span> </pre>
                   </li>
              ))}
            </ul>
          </div>
        )}

        {/* {singleProject.hasOwnProperty('achievements') && (
          <>
            <h2>Achievements</h2>
            <ul>
              {(singleProject as FullStackProject).achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </>
        )} */}

        {(singleProject as FullStackProject | FrontendProject).hasOwnProperty('githubRepo') && (
          <p>
            GitHub Repo:{" "}
            <a href={(singleProject as FullStackProject | FrontendProject).githubRepo} target="_blank" rel="noopener noreferrer" className="text-primary ">
              {(singleProject as FullStackProject | FrontendProject).githubRepo}
            </a>
          </p>
        )}

        {singleProject.hasOwnProperty('note') && (
          <>
            <h2>Note</h2>
            <p>{(singleProject as OtherProject).note}</p>
          </>
        )}
        <br />
      </div>
    );
  };

  return (
    <div >
      <h1 className="text-slate-700" >
        Hello World
      </h1>
      {project.frontendProjects.map((frontendProject) => renderSingleProject(frontendProject))}
      {project.fullStackProjects.map((fullStackProject) => renderSingleProject(fullStackProject))}
      {project.otherProjects.map((otherProject) => renderSingleProject(otherProject))}
    </div>
  );
};



