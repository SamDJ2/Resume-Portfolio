import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.home} id="home">
            <div className={styles.homeContent}>
                <div className={styles.box}>
                <h2 className={styles.heading}>Hello</h2>
                <p className={styles.paragraph}>I am Samuel <br></br> A software developer based in Birmingham UK</p>
                <a href="#contact" className={styles.contactButton}>Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Home;