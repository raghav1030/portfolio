interface contactData {
    email: string,
    phone: string,
    linkedIn: string,
    github: string,
    twitter: string,
    
}

const contact: contactData = {

    email: "raghav123ggandhi@gmail.com",
    phone: "+91-7678543639",
    linkedIn: "https://www.linkedin.com/in/raghav-gandhi-766b4917b/",
    github: "https://www.github.com/raghav1030/", 
    twitter : "https://twitter.com/RaghavGandhi14",

}

export const renderContact = () => {
    return (

`
Email: <a href="mailto:${contact.email}" target="_blank">${contact.email}</a>
Phone: <a href="tel:${contact.phone}" target="_blank">${contact.phone}</a>
LinkedIn: <a href="${contact.linkedIn}" target="_blank">${contact.linkedIn}</a>
GitHub: <a href="${contact.github}" target="_blank">${contact.github}</a>
Twitter: <a href="${contact.twitter}" target="_blank">${contact.twitter}</a>

`
        ) 
}