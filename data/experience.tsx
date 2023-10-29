// data/experienceData.ts

export interface Experience {
    id : number;
    title: string;
    company: string;
    date: string;
    description: string;
  }
  
  export const experience: Experience[] = [
    {
      id : 1,
      title: "Open Source Developer",
      company: "Hacktoberfest 2023",
      date: "October, 1 - October, 31",
      description: 
        "Contributed to various open-source repositories during Hacktoberfest, making a valuable impact on the projects.Successfully achieved the recognition of becoming an official Hacktoberfest contributor despite tough competition. Gained expertise in multiple new technologies, languages, and development tools through active participation. Collaborated with global open-source communities, demonstrating strong teamwork and communication skills."
      ,
    },
    {
      id : 2,
      title: "Open Source Developer",
      company: "GirlScript Summer of Code",
      date: "May 2023 - August 2023",
      description: 
        "Actively contributed to open-source projects, collaborating with global teams. Led project initiatives, showcasing strong leadership.",
    },
    {
      id : 3,
      title: "Open Source Developer",
      company: "Social (Formerly Script Foundation)",
      date: "June 2023 - July 2023",
      description: 
        "Drove web development projects, fostering effective communication with cross-functional teams and stakeholders. Efficiently managed project execution, resulting in a 20% improvement in project completion time.",
      
    },
    // Add more experience entries as needed
  ];
      
  
export const renderExperience = (experienceData: Experience[]): string => {

  
  
  return (
  
`${experienceData.map(exp => (
`
${exp.title} ~ ${exp.company} | ${exp.date}
- ${exp.description} 
${exp.id === 3 ? '' : '\n--------------------------------------------------------------'}
`)).join('')}`);
};
