import React from 'react';
import styles from '../styles/modules/navigation.module.scss';
import globalStyles from "../styles/modules/globals.module.scss";
const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <span className={`${styles.navigation__header} ${globalStyles.heading__small}`}>&lt;kildahl.dev&gt;</span>
            <a className={styles.navigation__item} href="">// home</a>
            <a className={styles.navigation__item} href="">// work</a>
            <a className={styles.navigation__item} href="">// blog</a>
            <a className={styles.navigation__item} href="">// about</a>
            <a className={styles.navigation__item} href="">// contact</a>
        </nav>
    );
};

export default Navigation;