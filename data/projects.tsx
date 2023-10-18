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
    }
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

const renderTechnologies = (technologies: string[]) => {
  return technologies.map((tech, index) => `- ${tech}`).join('\n   ');
};

const renderNote = (note: string) => {
  return `Note: ${note}\n`;
};

const renderSingleProject = (singleProject: FrontendProject | FullStackProject ) => {

  const { title, description, technologies, githubRepo } = singleProject;
  

  return (
`
${title}

${description}

Technologies:\n${technologies.map(tech => `- ${tech}`).join('\n')}\n
GitHub Repo: <a href=${githubRepo}}>${githubRepo}</a>
`  );
}

export const renderProject  = (project: ProjectData) => {
  return (
    
`${project.fullStackProjects.map((fullStackProject) => renderSingleProject(fullStackProject)).join('--------------------------------------------------------------')}
--------------------------------------------------------------
${project.frontendProjects.map((frontendProject) => renderSingleProject(frontendProject)).join('\n--------------------------------------------------------------\n')}
--------------------------------------------------------------

Note : I have a number of other exciting and innovative projects showcased on my GitHub profile that I made during my learning journey, awaiting your exploration! Feel free to visit my GitHub at <a href="https://github.com/raghav1030/">https://github.com/raghav1030/</a>  to delve deeper into my work.
`
  
  );
  

  
};



