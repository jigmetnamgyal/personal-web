import styles from './homepage.module.css';
import me from '../../assets/me.svg';
import {motion} from "framer-motion"

const Homepage = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.bgImg}></div>
            <div className={styles.bgVid}>
                <motion.p
                    initial={{
                        scale: 0,
                        rotate: 180
                    }}
                    animate={{
                        rotate: 360,
                        scale: 1
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}>
                    <span className={styles.j}>J</span>igme
                    <span className={styles.t}>T</span>ashi
                    <br/>
                    <span className={styles.n}>N</span>amgyal
                </motion.p>
                <p className={styles.lilInfo}>Nincompoop Since 2001</p>
            </div>
            <div className={styles.btnContainer}>
                {/*  <Button className={styles.btnAbout} variant="outline-warning"><Link to="/abo
 *  utMe">Explore</Link></Button>

 */
                }
                <img className={styles.mePic} src={me} alt="This is me"/>
            </div>
        </div>
    )
}

export default Homepage
