import styles from './homepage.module.css';


const Homepage = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.bgVid}>
                <p>
                    <span className={styles.j}>J</span>igme <span className={styles.t}>T</span>ashi <br /> <span className={styles.n}>N</span>amgyal
                </p>
                <p className={styles.lilInfo}>Nincompoop Since 2001</p>
            </div>
        </div>
    )
}

export default Homepage
