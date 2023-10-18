// data/educationData.ts

export interface Education {
    id : number;
    institution: string;
    degree: string;
    date: string;
    grade: string;
    
  }
  
  export const education: Education[] = [
    {
      id : 1,
      institution: "GL Bajaj Institute of Technology and Management",
      degree: "Bachelor of Technology - BTech, Information Technology",
      date: "2021 - 2025",
      grade: "Aggregate CGPA: 7.5 (until 4th Semester)",
    },
    { 
      id : 2,
      institution: "Lovely Public Sr. Sec. School",
      degree: "High School",
      date: "2021 batch",
      grade: "10th grade percentage: 90.4% \n12th grade percentage: 88.4%",
    },
    // Add more education entries as needed
  ];


  export const renderEducation = (education: Education[]): string => {
    return (
`${education.map(edu => (
`
${edu.institution}
${edu.degree}
${edu.date}
${edu.grade}
${edu.id !== education.length - 1 ? '' : '\n--------------------------------------------------------------'}
`)).join('')}`);


    
  }
  