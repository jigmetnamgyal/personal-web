import styles from './homepage.module.css';
// import me from '../../assets/me.svg';
import rich from '../../assets/rich.jpeg';
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
                    <span className={styles.j}>I</span> am
                    <span className={styles.t}> G</span>lad
                    <br/>
                    <span className={styles.n}> Y</span>ou
                    <span className={styles.t}> A</span>re
                    <span className={styles.t}> H</span>ere
                </motion.p>
                <p className={styles.lilInfo}>Welcome! I am Jigme Tashi Namgyal. A Programmer, <br /> trouble maker and a goof since 2001 </p>
            </div>
            <div className={styles.btnContainer}>
                <img className={styles.mePic} src={rich} alt="This is me"/>
                <p className={styles.colorP}><i>Currently reading.</i></p>
            </div>
        </div>
    )
}

export default Homepage
