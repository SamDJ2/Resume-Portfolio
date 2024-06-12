import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.heading}>About</h2>
            <p className={styles.paragraph}>About section here</p>
        </section>
    );
}

export default About;