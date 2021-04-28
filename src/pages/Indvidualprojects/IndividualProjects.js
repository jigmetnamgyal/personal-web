import {useEffect, useState} from 'react';
import {indiProjectsData} from './indiProjectsData';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import styles from './indiProject.module.css';
import Footer from '../../components/footer/Footer';
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

const IndividualProjects = (props) => {
    const {scrollYProgress} = useViewportScroll();
    // const y = useTransform(scrollYProgress, [60], [0]);
    // const opacity = useTransform(scrollYProgress, [0], [1]);

    const [id, setId] = useState(null);
    useEffect(() => {
        let id = props.match.params.projectId;
        setId(id);
    }, [])
    const project = indiProjectsData[id];

    return (
        <motion.div
            initial='initial'
            animate='animate'
            exit={{
                opacity: 0
            }}
            className={styles.indiProjectContainer}>
            <div className={styles.headerAbout}>
                {project && <h1 className={styles.contentHeader}>{project.projectName}</h1>}
            </div>
            <div className={styles.projContent}>

                <div className={styles.imgHolderProj}>
                    {
                        project && <motion.img
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
                                className={styles.imgOriginal}
                                src={project.images[1]}
                                alt={project.projectName}/>
                    }
                    {
                        project && (
                            <motion.div variants={stagger} className={styles.infoProject}>
                                <motion.h3 className={styles.infoClassWha} variants={fadeInUp}>A little about the projects</motion.h3>
                                <motion.p variants={fadeInUp}>{project.projectsInfo}</motion.p>
                                {project && !project.flag && <a href={project.projectLink} target="_blank" rel="noreferrer">Link to the project</a>}
                            </motion.div>
                        )
                    }
                </div>
                {project && project.flag ? (
                    <>
                    <h2 className={styles.headerAch}>Achievements</h2>
                    <div className={styles.projectCertHolder}>
                        {
                            project && (
                                <motion.div variants={stagger} className={styles.infoProject1}>
                                    {project && <motion.h3 variants={fadeInUp}>{project.awardTitle[0]}</motion.h3>}
                                    <motion.p variants={fadeInUp}>{project.certInfo[0]}</motion.p>
                                </motion.div>
                            )
                        }
                        {
                            project && <motion.img
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
                                    className={styles.imgOriginal1}
                                    src={project.awardImgs[0]}
                                    alt={project.projectName}/>
                        }
                    </div>
                    <div className={styles.projectCertHolder1}>
                        {
                            project && (
                                <motion.div variants={stagger} className={styles.infoProject1}>
                                    {project && <motion.h3 variants={fadeInUp}>{project.awardTitle[1]}</motion.h3>}
                                    <motion.p variants={fadeInUp}>{project.certInfo[1]}</motion.p>
                                </motion.div>
                            )
                        }
                        {
                            project && <motion.img
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
                                    className={styles.imgOriginal1}
                                    src={project.awardImgs[1]}
                                    alt={project.projectName}/>
                            }
                    </div>
                    </>
                ): <p></p>}
                
            </div>
            <Footer />
        </motion.div>
    )
}

export default IndividualProjects
