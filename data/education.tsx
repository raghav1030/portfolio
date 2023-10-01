// data/educationData.ts

export interface Education {
    institution: string;
    degree: string;
    date: string;
    grade: string;
  }
  
  export const education: Education[] = [
    {
      institution: "GL Bajaj Institute of Technology and Management",
      degree: "Bachelor of Technology - BTech, Information Technology",
      date: "Sep 2021 - Apr 2025",
      grade: "Aggregate CGPA: 7.5 (until 4th Semester)",
    },
    {
      institution: "Lovely Public Sr. Sec. School",
      degree: "High School",
      date: "2021 batch",
      grade: "10th grade percentage: 90.4%, 12th grade percentage: 88.4%",
    },
    // Add more education entries as needed
  ];


  export const renderEducation = (education: Education[]): JSX.Element => {
    return (
      <div className="education">
        <h2>Education</h2>
        {education.map(edu => (
          <div key={edu.institution} className="education-entry">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.date}</p>
            <p>{edu.grade}</p>
          </div>
        ))}
      </div>
    );
  }
  