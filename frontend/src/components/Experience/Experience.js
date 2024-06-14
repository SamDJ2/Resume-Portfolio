import React, {useState} from 'react';
import styles from './Experience.module.css';

const Experience = () => {

    const [active, setActive] = useState(null);

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <section className={styles.experience} id="experience">
            <h2 className={styles.heading}>Education and Experience</h2>
            <ul className={styles.container}>
                <li
                    className={`${styles.link} ${active === 0 ? styles.active : ''}`}
                    onClick={() => handleClick(0)}
                >
                        <div className={styles.title}>
                            <h3>Crickhowell High School</h3>
                            <p>2014-2021</p>
                            <div className={styles.chs}>
                            <p>During my time at Crickhowell High School from year 7 to year 13,
                                I thrived academically, securing outstanding grades across both GCSEs and A-Levels. With A grades in Computer Science,
                                Mathematics, and Further Mathematics, I demonstrated a strong aptitude for STEM subjects. Notably,
                                I received awards in Additional Mathematics and in the UKMT Maths Challenge.</p>
                            </div>
                        </div>
                </li>
                <li
                    className={`${styles.link} ${active === 1 ? styles.active : ''}`}
                    onClick={() => handleClick(1)}
                >
                        <div className={styles.title}>
                            <h3>Hospitality</h3>
                            <p>2021-2023</p>
                            <div className={styles.mcd}>
                                <p>From 2021 to 2023,
                                    I excelled in a dynamic, fast-paced environment. Thriving under pressure,
                                    I consistently delivered high-quality service while collaborating effectively with my team.
                                    Handling hundreds of daily orders, I exceeded performance targets and seamlessly adapted to various responsibilities,
                                    from cashiering to customer support. Additionally, I contributed to inventory management, ensuring accuracy and timely
                                    replenishment to uphold operational efficiency.
                                </p>
                            </div>
                        </div>
                </li>
                <li
                    className={`${styles.link} ${active === 2 ? styles.active : ''}`}
                    onClick={() => handleClick(2)}
                >
                        <div className={styles.title}>
                            <h3>University of Birmingham</h3>
                            <p>2022-2025</p>
                            <div className={styles.uob}>
                                <p>At the University of Birmingham, I am pursuing a degree in Computer Science,
                                    delving deeply into my passion for software development. My studies includes Data Structures and Algorithms,
                                    Security and Networks, AI, Full Stack Development, and more,
                                    culminating in a web development team project that honed my collaborative and technical skills. Additionally,
                                    I joined the archery club and began competitive longbow archery, balancing my academic pursuits with a rewarding
                                    extracurricular activity.</p>

                            </div>
                        </div>
                </li>
            </ul>
            </section>
    );
}

export default Experience;