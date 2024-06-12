import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.aboutProfile} id="about">
            <div className={styles.about}>
                <h2 className={styles.heading}>About</h2>
                <p className={styles.paragraph}>I'm a Computer Science student at the University of Birmingham with a passion for software development.
                    I have experience in customer service and hospitality,
                    exponentially growing my teamwork and communication skills.
                    I'm dedicated to continuous learning and eager to contribute to innovative projects.</p>
            </div>
            <div className={styles.profile}>
                <h2 className={styles.heading}>Profile</h2>
                <p>Name: Samuel Davies-Jelly <br></br>
                Ocupation: Student<br></br>
                Age: 20 <br></br>
                Location: Birmingham UK
                </p>
            </div>
        </section>
    );
}

export default About;