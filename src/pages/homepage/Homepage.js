import styles from './homepage.module.css';
// import me from '../../assets/me.svg';
import rich from '../../assets/physics.jpeg';
import {motion} from "framer-motion"

const Homepage = () => {
    return (
        <>
       
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
                    <p className={styles.lilInfo}>Jigme Tashi Namgyal - Goof Since 2001</p>
                </motion.p>
                
            </div>
            <div className={styles.btnContainer}>
                <img className={styles.mePic} src={rich} alt="This is me"/>
                <p className={styles.colorP}><i>Currently reading.</i></p>
            </div>
        </div>
        </>
    )
}

export default Homepage
