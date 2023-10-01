// data/experienceData.ts

export interface Experience {
    title: string;
    company: string;
    date: string;
    description: string[];
  }
  
  export const experience: Experience[] = [
    {
      title: "Open Source Developer",
      company: "GirlScript Summer of Code",
      date: "May 2023 - August 2023",
      description: [
        "Actively contributed to open-source projects, collaborating with global teams.",
        "Led project initiatives, showcasing strong leadership.",
      ],
    },
    {
      title: "Web Developer",
      company: "Social (Formerly Script Foundation)",
      date: "June 2023 - July 2023",
      description: [
        "Drove web development projects, fostering effective communication with cross-functional teams and stakeholders.",
        "Efficiently managed project execution, resulting in a 20% improvement in project completion time.",
      ],
    },
    // Add more experience entries as needed
  ];
      

export const renderExperience = (experienceData: Experience[]): JSX.Element => {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <ul>
        {experienceData.map(exp => (
          <li key={exp.title}>
            <h3>{exp.title}</h3>
            <p>
              <strong>{exp.company}</strong> | {exp.date}
            </p>
            <ul>
              {exp.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
