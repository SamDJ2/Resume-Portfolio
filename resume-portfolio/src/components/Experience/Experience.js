import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
    return (
        <section className={styles.experience} id="experience">
            <h2 className={styles.heading}>Education and Experience</h2>
                <div className={styles.box}>
                        <div className={styles.chs}>
                            <div className={styles.title}>
                                <h3>Crickhowell High School</h3>
                                <p>2014-2021</p>
                            </div>
                        </div>

                        <div className={styles.mcd}>
                            <div className={styles.title}>
                                <h3>Mcdonalds</h3>
                                <p>2021-2023</p>
                            </div>
                        </div>

                        <div className={styles.uob}>
                            <div className={styles.title}>
                                <h3> University of Birmingham </h3>
                                <p>2022-2025</p>
                            </div>
                        </div>
                </div>
            </section>
    );
}

export default Experience;