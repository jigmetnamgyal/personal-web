import styles from './comingsoon.module.css';
import coming from '../../assets/thrivingArtists/nope.svg'

const Comingsoon = () => {
    return (
        <div className={styles.comingsoonContainer}>
            <div className={styles.imgSoon}>
                <h2>Coming soon</h2>
                <img className={styles.imgofSoon} src={coming} alt="soon"/>
            </div>
        </div>
    )
}

export default Comingsoon
