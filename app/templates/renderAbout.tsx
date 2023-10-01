import React from 'react'
import { AboutData } from '@/data/about'
import style from './renderAbout.module.css';

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