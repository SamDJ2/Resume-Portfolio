import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsSection}>
            <h3 className={styles.skillsName}>Skills</h3>
            <div className={styles.skillsContainer}>
                <div className={styles.skillCategory}>
                    <h3>Programming and Markup Languages</h3>
                    <ul>
                        <li><strong>Proficient:</strong> Java, JavaScript, HTML, CSS, Python, C/C++</li>
                        <li><strong>Familiar:</strong> Haskells</li>
                    </ul>
                </div>
                <div className={styles.skillCategory}>
                    <h3>Frameworks and Technologies</h3>
                    <ul>
                        <li><strong>Database:</strong> SQL, PostgreSQL</li>
                        <li><strong>Backend:</strong> Spring Boot, Node.js</li>
                        <li><strong>Frontend:</strong> Angular, React.js</li>
                        <li><strong>Version Control:</strong> Git, GitHub</li>

                    </ul>
                </div>
                <div className={styles.skillCategory}>
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Strong problem-solving abilities</li>
                        <li>Effective communication</li>
                        <li>Adaptable</li>
                        <li>Teamwork and collaboration</li>
                    </ul>
                </div>
                <div className={styles.skillCategory}>
                    <h3>Other Skills</h3>
                    <ul>
                        <li>Building and configuring PCs</li>
                        <li>Practical experience with CI/CD pipelines</li>
                        <li>User experience enhancement (adjustable font size, contrast changes)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;