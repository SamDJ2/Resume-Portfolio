import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.home} id="home">
            <div className={styles.homeContent}>
                <box>
                <h2 className={styles.heading}>Hello</h2>
                <p className={styles.paragraph}>I am Samuel <br></br> A software developer based in Birmingham</p>
                    <a href="#contact" className={styles.contactButton}>Contact Me</a>
                </box>
            </div>
        </section>
    );
}

export default Home;