import React, { ReactNode } from "react";

// data/aboutData.ts
export interface AboutData {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  twitter: string;
  hashnode: string;
  skills: string[];
  summary: string; // Added a summary field
}

export const about: AboutData = {
  name: "Raghav Gandhi",
  location: "Delhi, India",
  email: "raghav123ggandhi@gmail.com",
  phone: "7678543639",
  linkedIn: "https://www.linkedin.com/in/raghav-gandhi-766b4917b/",
  github: "https://github.com/raghav1030/",
  twitter: "https://twitter.com/RaghavGandhi14",
  hashnode: "https://hashnode.com/@rg1030",
  skills: [
    "Design: Responsive Web Design, UI/UX Design, Adobe Photoshop, Figma",
    "Frontend: HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, React Hooks",
    "Backend: Node.js, Express.js, REST APIs, MongoDB, Python, C++, Web Services Protocols",
    "Tools: Git/GitHub, Vercel, Auth0, API Integration, Linux, CI/CD, Cloudinary, Firebase, Socket.IO, WebRTC",
  ],
  summary: "Passionate web developer with expertise in front-end and back-end technologies. Dedicated to creating user-friendly, responsive, and performance-optimized websites.",
};

export const renderAbout  = (about : AboutData)  => {
  return (
   <div className=''>
       <h1 className='text-primary' > {about.name}</h1>
       <p>Location: {about.location}</p>
       <p>Email: <a href="mailto:${about.email}" target="_blank">{about.email}</a></p>
       <p>Phone: {about.phone}</p>
 
       <h2>Skills</h2>
       <ul>
         {about.skills.map(skill => <li>{skill}</li>)}
       </ul> 
 
       <h2>Summary</h2>
       <p>{about.summary}</p>
 
       <h2>Connect with Me</h2>
       <ul>
         <li><a href={about.linkedIn} target="_blank">LinkedIn</a></li>
         <li><a href={about.github} target="_blank">GitHub</a></li>
         <li><a href={about.twitter} target="_blank">Twitter</a></li>
         <li><a href={about.hashnode} target="_blank">Hashnode</a></li>
       </ul>
     </div>
 
  )
 }
