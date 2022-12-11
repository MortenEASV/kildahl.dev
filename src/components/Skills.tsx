import React from 'react';
import styles from '../styles/modules/skills.module.scss';
import globalStyles from "../styles/modules/globals.module.scss";
import {IconCSharp} from "../svg/IconCSharp";
import {IconTypeScript} from "../svg/IconTypeScript";
import {IconFlutter} from "../svg/IconFlutter";
import {IconUmbraco} from "../svg/IconUmbraco";
import {IconJava} from "../svg/IconJava";
import {IconReact} from "../svg/IconReact";
const Skills = () => {
    return (
        <article className={styles.skills}>
            <header className={`${styles.skills__heading} ${globalStyles.heading__small}`}>I do these things</header>
            <div className={styles.skills__container}>
                <IconCSharp/>
                <IconReact/>
                <IconTypeScript/>
                <IconFlutter/>
                <IconUmbraco/>
                <IconJava/>
            </div>
        </article>
    );
};

export default Skills;