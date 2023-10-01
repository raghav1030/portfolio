// data/certificationsData.ts

export interface Certification {
    title: string;
    issuer: string;
  }
  
  export const certifications: Certification[] = [
    {
      title: "Full Stack Web Development ",
      issuer: "Code Help",
    },
    {
      title: "Google Digital Marketing ",
      issuer: "Google Digital Garage",
    },
    // Add more certification entries as needed
  ];
  
  export const renderCertifications = (certifications: Certification[]) => {
    return (
      <div className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map(certification => 
          <li>
            <strong>{certification.title}</strong> - {certification.issuer}
          </li>)}
      </ul>
    </div>
    )
  }