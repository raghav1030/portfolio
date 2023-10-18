// data/certificationsData.ts

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  certificate_link: string
}

export const certifications: Certification[] = [
  { 
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Code Help by Love Babbar",
    certificate_link: 'https://drive.google.com/file/d/1b0nHpTi4_u22GgZi9zbXR7HQ7EXXKPaw/view?usp=sharing'

  },
  { 
    id: 2,
    title: "Upskillz Certified Full Stack Web Developer",
    issuer: "Upskillz",
    certificate_link: 'https://drive.google.com/file/d/1ena-GAqJzHjIkueosOngqWH3_i6qUuSJ/view?usp=sharing'
  },
  // Add more certification entries as needed
];

const downloadButton = (link: string) => {
  return `<a href=${link} target="_blank" >📄</a>`
}
const formattedCertifications = certifications
  .map(certification => `- ${certification.title} - ${certification.issuer} - ${downloadButton(certification.certificate_link)}(clickable link)`)
  .join('\n');

export const renderCertifications = (certifications: Certification[]) => {
  return (
`
Certifications :

${formattedCertifications} 
`
  )
}