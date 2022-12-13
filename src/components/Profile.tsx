import styles from '../styles/modules/profile.module.scss';
import globalStyles from '../styles/modules/globals.module.scss'

const Profile = () => {
    return (
        <article className={styles.profile}>
            <span className={`${styles.profile__preheading} ${globalStyles.heading__small}`}>Hi there! I'm</span>
            <header className={`${globalStyles.heading__huge}`}>Morten</header>
            <header className={`${globalStyles.heading__huge} ${styles.profile__green}`}>&nbsp;&nbsp;&nbsp;Kildahl</header>
            <header className={`${globalStyles.heading__huge}`}>Kristensen</header>
            <img src="/me.png" className={styles.profile__image}></img>
        </article>
    );
};

export default Profile;