import {useEffect, useState} from 'react';
import {indiProjectsData} from './indiProjectsData';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import './indiProject.css';

const transition = {
    duration: 1.3,
    ease: [0.6, 0.01, -0.05, 0.9]
};

const firstName1 = {
    initial: {
        y: 0
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1
        }
    }
};

const lastName1 = {
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1
        }
    }
};

const letter = {
    initial: {
        y: 400
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            ...transition
        }
    }
};

const IndividualProjects = (props) => {
    const {scrollYProgress} = useViewportScroll();
    const scale = useTransform(scrollYProgress, [
        0, 1
    ], [0.6 ,1.2]);
    const [id, setId] = useState(null);
    useEffect(() => {
        let id = props.match.params.projectId;
        setId(id);
    }, [])
    const project = indiProjectsData[id];

    return (
        <motion.div initial='initial' animate='animate' exit='exit' className='single'>
            <div className='container fluid'>
                <div className='row center top-row'>
                    <div className='top'>
                   
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 0
                            }}
                            animate={{
                                opacity: 1,
                                y: -20,
                                transition: {
                                    delay: 1.2,
                                    ...transition
                                }
                            }}
                            className='details'>
                        </motion.div>
                        <motion.div className='model'>
                            <motion.span variants={firstName1} className='first'>
                                {
                                    project && project
                                        .firstName
                                        .map(letn => (<motion.span variants={letter}>{letn}</motion.span>))
                                }

                            </motion.span>
                            <motion.span variants={lastName1} className='last'>
                                {
                                    project && project
                                        .lastName
                                        .map(letn => (<motion.span variants={letter}>{letn}</motion.span>))
                                }
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
                <div className='row bottom-row'>
                    <div className='bottom'>
                        <div className='image-container-single'>
                            <motion.div
                                initial={{
                                    y: "-50%",
                                    width: "100%",
                                    height: "100%"
                                }}
                                animate={{
                                    y: "-30%",
                                    width: '60%',
                                    height: window.innerHeight > 1440
                                        ? 900
                                        : 700,
                                    x: "15px"
                                }}
                                transition={{
                                    delay: 0.2,
                                    ...transition
                                }}
                                className='thumbnail-single'>
                                <div className='frame-single'>
                                    {
                                        project && (
                                            <motion.img
                                                initial={{
                                                    scale: 0.6,
                                                }}
                                                style={{scale: scale}}
                                                className="projectsImg"
                                                src={project.images[1]}
                                                alt='arexpImage'/>
                                        )
                                    }

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detailed-information'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='title'>
                            The insiration behind the Projects &
                            <br/>
                            A little about it.
                        </h2>
                      
                           {project && <p>{project.projectsInfo}</p>}
                    </div>
                    <div className='row soso'>
                        <h2 className='title'>
                            Achievements
                        </h2>
                      
                    </div>
                </div>
                
            </div>
        </motion.div>
    )
}

export default IndividualProjects
