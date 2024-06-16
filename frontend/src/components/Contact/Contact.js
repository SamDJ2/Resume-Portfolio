import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2>Contact Me</h2>
            <div className={styles.contactInfo}>
                <p><strong>Mr</strong> Samuel Davies-Jelly</p>
                <p><strong>Email:</strong> Samdj1029@gmail.com</p>
                <p><strong>Location:</strong> Birmingham, UK</p>
                <p><strong>LinkedIn:</strong> <a href="https://uk.linkedin.com/in/samuel-davies-jelly-6117291a0" target="_blank" rel="noopener noreferrer">Samuel Davies-Jelly</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/SamDJ2" target="_blank" rel="noopener noreferrer">SamDJ2</a></p>
            </div>
        </section>
    );
};

export default Contact;