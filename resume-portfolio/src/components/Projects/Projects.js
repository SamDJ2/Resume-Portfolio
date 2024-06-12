import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
            <h2 className={styles.heading} >Projects</h2>
            <p className={styles.paragraph} >Details of projects here.</p>
        </section>
    );
}

export default Projects;