import styles from '../styles/modules/profile.module.scss';
import globalStyles from '../styles/modules/globals.module.scss'

const Profile = () => {
    return (
        <article className={styles.profile}>
            <header className={`${styles.profile__preheading} ${globalStyles.heading__small}`}>Hi there! I'm</header>
            <header className={`${styles.profile__firstname} ${globalStyles.heading__huge}`}>Morten</header>
            <header className={`${styles.profile__middlename} ${globalStyles.heading__huge}`}>Kildahl</header>
            <header className={`${styles.profile__lastname} ${globalStyles.heading__huge}`}>Kristensen</header>
            <img src="/me.png" className={styles.profile__image}></img>
        </article>
    );
};

export default Profile;