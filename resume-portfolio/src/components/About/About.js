import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            <h2 className={styles.heading}>About Me</h2>
            <p className={styles.paragraph}>introduction and biography here.</p>
        </section>
    );
}

export default About;