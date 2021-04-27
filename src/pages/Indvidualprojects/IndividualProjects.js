import {useEffect, useState} from 'react';
import {indiProjectsData} from './indiProjectsData';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import styles from './indiProject.module.css';

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
    const [id, setId] = useState(null);
    useEffect(() => {
        let id = props.match.params.projectId;
        setId(id);
    }, [])
    const project = indiProjectsData[id];

    return (
        <div className={styles.indiProjectContainer}>
            
        </div>
    )
}

export default IndividualProjects
