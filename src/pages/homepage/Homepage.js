import styles from './homepage.module.css';
// import me from '../../assets/me.svg';
import rich from '../../assets/physics.jpeg';
import {motion} from "framer-motion"
import Footer from '../../components/footer/Footer';
import space from '../../assets/sci/space1.svg';
import phys from '../../assets/sci/phys.svg';
import bio from '../../assets/sci/bio.svg';
import story from '../../assets/sci/philo.svg';
import society from '../../assets/sci/society.svg';
import tech from '../../assets/sci/tech.svg';

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
            <div className={styles.waveAnimate}>
                <div className={styles.wave}></div>
                <div className={styles.wave1}></div>
            </div>
        </div>
        <div className={styles.homeMidContent}>
            <h1 className={styles.topicMidContent}>Blog Topics</h1>
            <div className={styles.imgBlockHolder}>
                <div className={styles.thisIsImg}>
                    <img className={styles.imgCool} src={space} alt="space"/>
                    <p className={styles.caption}>Space</p>
                </div>
                <div className={styles.thisIsImg}>
                    <img className={styles.imgCool} src={tech} alt="tech"/>
                    <p className={styles.caption}>Technology</p>
                </div>
                <div className={styles.thisIsImg}>
                    <img className={styles.imgCool} src={phys} alt="physice"/>
                    <p className={styles.caption}>Physics</p>
                </div>
                <div className={styles.thisIsImg}>
                    <img className={styles.imgCool} src={bio} alt="bio"/>
                    <p className={styles.caption}>Biology</p>
                </div>
                <div className={styles.thisIsImg}>
                    <img className={styles.imgCool} src={story} alt="story"/>
                    <p className={styles.caption}>Story</p>
                </div>
                <div className={styles.thisIsImg}>
                    <img className={styles.imgCool} src={society} alt="society"/>
                    <p className={styles.caption}>Society</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Homepage
