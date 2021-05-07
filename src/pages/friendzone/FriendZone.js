import styles from './friendzone.module.css';
import newsletter from '../../assets/newsletter.svg';

const FriendZone = () => {
    return (
        <div className={styles.friendzoneContainer}>
            <div className={styles.topPart}>
                <div className={styles.imgHolderNews}>
                    <img className={styles.imgNews} src={newsletter} alt="Newsletter" />
                </div>
                <div className={styles.headerTitleNews}>
                    <h1>The Friendzone</h1>
                    <p>The Friendzone is my weekly(ish) email newsletter. It's totally free to signup, so if you want to read more from me in your inbox, I'd love for you to join the party.</p>
                </div>
            </div>
            <div className={styles.bottomPart}></div>
        </div>
    )
}


export default FriendZone
