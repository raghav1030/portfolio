interface SkillData {
    title: string,
    skills: string[],
}

const skillData: SkillData[] = [
    {
        title: "Design",
        skills: [
            "Responsive Web Design",
            "UI/UX Design",
            "Adobe Photoshop",
            "Figma"
        ]
    },
    {
        title: "Frontend",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "React Hooks"
        ]
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "MongoDB",
            "Python",
            "C++",
            "Web Services Protocols"
        ]
    },
    {
        title: "Miscellenous",
        skills: [
            "Git/GitHub",
            "Vercel",
            "Auth0",
            "API Integration",
            "Linux",
            "CI/CD",
            "Cloudinary",
            "Firebase",
            "Socket.IO",
            "WebRTC"
        ]
    }
]


export const renderSkills = () => {
    // const skillTemplate = skillData.map(skill => (
    //     `<span> <span>${skill?.title} :</span> ${skill?.skills.join(', ')} </span>`
        
    
   const skillTemplate = skillData.map(skill => 
    `- ${skill?.title} : ${skill?.skills.join(', ')}`
    )


   return (
//         <>

// {
//     skillData.map(skill => (
//         <div className="text-lg" ><span className="font-bold">{skill?.title} : </span> <span className="font-bold" >{skill?.skills.join(', ')}</span>. </div>
//     ))
// }
//         </>

    `
${skillTemplate.join('\n')}
    `
    )

};
