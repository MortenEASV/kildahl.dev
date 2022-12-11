import styles from '../styles/modules/footer.module.scss';
import globalStyles from '../styles/modules/globals.module.scss'
import React from "react";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span className={`${styles.footer__header} ${globalStyles.heading__small}`}>&lt;/kildahl.dev&gt;</span>
        </div>
    );
};

export default Footer;