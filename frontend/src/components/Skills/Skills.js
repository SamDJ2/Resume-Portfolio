import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.heading}>Skills</h2>
            <p className={styles.paragraph}>List your skills here.</p>
        </section>
    );
}

export default Skills;