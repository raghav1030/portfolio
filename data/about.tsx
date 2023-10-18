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
  phone: "+91-7678543639",
  linkedIn: "https://www.linkedin.com/in/raghav-gandhi-766b4917b/",
  github: "https://github.com/raghav1030/",
  twitter: "https://twitter.com/RaghavGandhi14",
  hashnode: "https://hashnode.com/@rg1030",
  skills: [
    "Design: Responsive Web Design, UI/UX Design, Adobe Photoshop, Figma.",
    "Frontend: HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, React Hooks.",
    "Backend: Node.js, Express.js, REST APIs, MongoDB, Python, C++, Web Services Protocols.",
    "Miscellenous : Git/GitHub, Vercel, Auth0, API Integration, Linux, CI/CD, Cloudinary, Firebase, Socket.IO, WebRTC.",
  ],
  summary: "Passionate web developer with expertise in front-end and back-end technologies. Dedicated to creating user-friendly, responsive, and performance-optimized websites.",
};

const clickableLink = (link : string)  => {
  return (
    <a href="${link}" target="_blank">${link}</a>
  )
}

export const renderAbout  = (about : AboutData)  => {
  return (
    
`
Name: ${about.name}

Location: ${about.location}
Email: <a href="mailto:${about.email}" target="_blank">${about.email}</a>
Phone: <a href="tel:${about.phone}" target="_blank">${about.phone}</a>

Skills:
- ${about.skills.join('\n- ')}

Summary:
- ${about.summary}

Connect with Me:

- LinkedIn: <a href="${about.linkedIn}" target="_blank">${about.github}</a> 
- GitHub: <a href="${about.github}" target="_blank">${about.github}</a>
- Twitter: <a href="${about.twitter}" target="_blank">${about.twitter}</a>
- Hashnode: <a href="${about.hashnode}" target="_blank">${about.hashnode}</a>
`  )
 }
