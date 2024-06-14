import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Projects.module.css';
import images from '../../assets/images/index';

const Project = ({ project, isActive, onClick }) => {

    const idToClassNameMap = {
        1: styles.one,
        2: styles.two,
    };

    const specificClassName = idToClassNameMap[project.id] || '';

    return (
        <div className={`${styles.project} ${isActive ? styles.active : ''}`} onClick={() => onClick(project.id)}>
            <img src={images[project.image]} alt={project.name} className={styles.projectImage} />
            <h3 className={styles.projectName}>{project.name}</h3>

            {isActive && (
                <div className={`${styles.one} ${specificClassName}`}>
                    {project.id % 2 === 0 ? (
                        <>
                            <div className={styles.skills}>
                                <h3>Skills</h3>
                                {project.skills.map((skill, idx) => (
                                    <p key={idx}>{skill}</p>
                                ))}
                            </div>
                            <div className={styles.projectDetails}>
                                <p>{project.description}</p>
                                <div className={styles.additionalImages}>
                                    {project.additionalImages.map((img, idx) => (
                                        <img key={idx} src={images[img]} alt={`${project.name} ${idx + 1}`} />
                                    ))}
                                </div>
                                <br />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.projectDetails}>
                                <p>{project.description}</p>
                                <div className={styles.additionalImages}>
                                    {project.additionalImages.map((img, idx) => (
                                        <img key={idx} src={images[img]} alt={`${project.name} ${idx + 1}`} />
                                    ))}
                                </div>
                                <br />
                            </div>
                            <div className={styles.skills}>
                                <h3>Skills</h3>
                                {project.skills.map((skill, idx) => (
                                    <p key={idx}>{skill}</p>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [activeProjectId, setActiveProjectId] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const handleProjectClick = (id) => {
        setActiveProjectId(id);
    };

    return (
        <section className={styles.projects} id="projects">
            <h2 className={styles.heading}>Projects</h2>
            <div className={styles.projectsContainer}>
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                        isActive={project.id === activeProjectId}
                        onClick={handleProjectClick}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;