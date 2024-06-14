const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const projects = [
    {
        id: 1,
        name: 'Web Development Team Project',
        image: 'newGroup1',
        description: '\n' +
            'In a team project at the University of Birmingham, I developed the Groups and Leaderboards feature for Purify, ' +
            'a motivational app that connects users to foster progress through collaboration and competition. ' +
            'Users can join or create groups, earn points from challenges, and track their progress both weekly and long-term. ' +
            'Weekly points are pooled for group badges, and leaderboards reset weekly to maintain motivation. Additionally, ' +
            'I implemented accessibility features, including an adjustable font slider and a light/dark theme button.',
        additionalImages: ['newGroup2', 'team1'],
        skills: ['Programming languages: Java, JavaScript, SQL, HTML, CSS',
            'Framework/technologies: Angular, Spring Boot, JHipster, Git, CI/CD pipeline',
            'Soft skills: Collaboration, Adaptability, Communication, Problem-solving',
        'Other learnings: Agile methodologies, Accessibility features'],
    },
    {
        id: 2,
        name: 'Portfolio Web Application',
        image: 'portfolio1',
        description: 'This web application serves as a comprehensive portfolio showcasing my projects, ' +
            'skills, and expertise in the field of software development. Through an intuitive and visually appealing interface, ' +
            'visitors can explore my past projects, read detailed descriptions and view images. ' +
            'The application highlights my proficiency in various programming languages, frameworks, and technologies, ' +
            'providing potential collaborators and employers with a clear overview of my capabilities and contributions to the field.',
        additionalImages: [],
        skills: ['Programming languages: JavaScript, HTML, CSS',
            'Framework/technologies: React.js, Node.js, Axios, Git',
            'Soft skills: Adaptability, Problem-solving',
            'Other learnings: Agile methodologies'],

    },

];

app.get('/projects', (req, res) => {
    res.json(projects);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});