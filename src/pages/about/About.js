import styles from './about.module.css';
import me from '../../assets/me.JPG';
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub, AiOutlineFacebook} from 'react-icons/ai';
import {motion} from 'framer-motion';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: easing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};
const About = () => {
    return (
        <>
        <div className={styles.headerAbout}>
        <motion.p variants={fadeInUp} className={styles.contentHeader}>About Me</motion.p>
    </div>
        <motion.div
            initial='initial'
            animate='animate'
            exit={{
                opacity: 0
            }}
            className={styles.about__container}>
            <div className={styles.about__imgHolder}>
           
                <motion.img
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    initial={{
                        x: 200,
                        opacity: 0
                    }}
                    exit={{
                        opacity: 0
                    }}
                    transition={{
                        delay: 0.2
                    }}
                    className={styles.mePic}
                    src={me}
                    alt="This is me"/>
            </div>
            <div className={styles.about__contentHolder}>
                <motion.div variants={stagger} className={styles.content}>
                    <motion.p variants={fadeInUp} className={styles.contentContent}>
                        My name is Jigme Tashi Namgyal and I am from Trashigang, Bhutan. I am currently
                        pursuing my education in Bs. Computer Science in ADA University in Baku,
                        Azerbaijan. Due to the covid situation I decided to take a gap year and while I
                        am at it, I am trying to skill up.
                        <br/>
                        <br/>
                        I am Seeking to be inspired, to envision the unlikely, to work hard for things
                        that are worth it, and to be surrounded by those who bring out the best in me.
                        <br/>
                        <br/>
                        I am currently working as a software engineer at
                        <a
                            id={styles.targeta}
                            target="_blank"
                            href="https://selise.ch/"
                            rel="noreferrer"> Selise Bhutan</a>
                        <br/>
                        <br/>
                        I am Blockchain and Crypto Enthusiast. Currently looking to enhance and learn
                        the technology. Contact me if you can help me or want to talk about blockchain
                        technology. We can work on some cool projects :)
                    </motion.p>
                </motion.div>
                <motion.div variants={fadeInUp} className={styles.socialMedia}>
                    {/* <p className={styles.contentHeader1}>Contact Me</p> */}
                    <div className={styles.socialMediaHolder}>
                        <a
                            className={styles.iconsMedia}
                            href="https://www.instagram.com/jigmetashinamgyal/"
                            target="_blank"
                            rel="noreferrer"><AiOutlineInstagram/></a>
                        <a
                            className={styles.iconsMedia}
                            href="https://www.linkedin.com/in/jigme-tashi-namgyal-511a811a3/"
                            target="_blank"
                            rel="noreferrer"><AiOutlineLinkedin/></a>
                        <a
                            className={styles.iconsMedia}
                            href="https://twitter.com/JigmeTashiNamg1"
                            target="_blank"
                            rel="noreferrer"><AiOutlineTwitter/></a>
                        <a
                            className={styles.iconsMedia}
                            href="https://github.com/JigmeT123"
                            target="_blank"
                            rel="noreferrer"><AiOutlineGithub/></a>
                        <a
                            className={styles.iconsMedia}
                            href="https://www.facebook.com/Mugiwara.D.Jigme619/"
                            target="_blank"
                            rel="noreferrer"><AiOutlineFacebook/></a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
        </>
    )
}
export default About