import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [active, setActive] = useState('about');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <a href="#home" className={styles.logo}>Samuel Davies-Jelly</a>
                <ul className={styles.ul}>

                    <li className={styles.li}>
                        <a
                            href="#about"
                            className={`${styles.a} ${active === 'about' ? styles.active : ''}`}
                            onClick={() => setActive('about')}
                        >
                            About
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a
                            href="#experience"
                            className={`${styles.a} ${active === 'experience' ? styles.active : ''}`}
                            onClick={() => setActive('experience')}
                        >
                            Education and Experience
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a
                            href="#projects"
                            className={`${styles.a} ${active === 'projects' ? styles.active : ''}`}
                            onClick={() => setActive('projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a
                            href="#skills"
                            className={`${styles.a} ${active === 'skills' ? styles.active : ''}`}
                            onClick={() => setActive('skills')}
                        >
                            Skills
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a
                            href="#contact"
                            className={`${styles.a} ${active === 'contact' ? styles.active : ''}`}
                            onClick={() => setActive('contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;