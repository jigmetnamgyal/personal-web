import styles from './homepage.module.css';
import me from '../../assets/me.svg';

const Homepage = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.bgImg}></div>
            <div className={styles.bgVid}>
                <p>
                    <span className={styles.j}>J</span>igme <span className={styles.t}>T</span>ashi <br /> <span className={styles.n}>N</span>amgyal
                </p>
                <p className={styles.lilInfo}>Nincompoop Since 2001</p>
            </div>
            <div className={styles.btnContainer}>
                {/* <Button className={styles.btnAbout} variant="outline-warning"><Link to="/aboutMe">Explore</Link></Button> */}
                <img className={styles.mePic} src={me} alt="This is me"/>
            </div>
        </div>
    )
}

export default Homepage
