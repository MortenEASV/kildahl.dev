import styles from '../styles/modules/about.module.scss';
import globalStyles from '../styles/modules/globals.module.scss'
import React from "react";

const About = () => {
    return (
        <article className={styles.about}>
            <header className={`${styles.about__heading} ${globalStyles.heading__small}`}>About me</header>
            <p className={`${styles.about__text} ${globalStyles.text__normal}`}>
               Hello! My name is Morten. I am a full-stack developer currently studying computer science at <a href="https://www.linkedin.com/school/erhvervsakademi-sydvest/">Business Academy SouthWest</a>. in Denmark.
            </p>
            <p className={`${styles.about__text} ${globalStyles.text__normal}`}>
                I am experienced in C#, React, Typescript, Flutter, and Java.
                I currently work as a part-time software developer at <a href="https://www.linkedin.com/company/sydbank/">Sydbank</a>. Responsibilities include developing websites with React as well as working with the Umbraco Content Management System.
                As my contract expires in January 2023, I am available for new employment opportunities and eager to apply my skills and experience in a new environment.
            </p>
        </article>
    );
};

export default About;