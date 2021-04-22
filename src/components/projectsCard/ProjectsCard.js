import styles from './projectsCard.module.css';
import Chip from '@material-ui/core/Chip';
import {GrProjects} from 'react-icons/gr';
import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {AnimatePresence, motion, useViewportScroll, useTransform} from "framer-motion";

// import ProgressiveImage from "react-progressive-image"; first load compressd
// version of image and then cool pixelated one -- will use in the future

const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96]
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0
    },
    chip: {
        margin: theme.spacing(0.5)
    }
}));

const ProjectsCard = ({difficulties, title, description, tags, image, link}) => {
    const classes = useStyles();
    const [chipData, setChipData] = useState(tags);
    return (
        <AnimatePresence initial={true} exitBeforeEnter>
            <motion.div  className={styles.projectsCardContainer}>
                {
                    difficulties === "Hard"
                        ? (<Chip color="secondary" label={difficulties}/>)
                        : (<Chip color="primary" label={difficulties}/>)
                }
                <Link to={link}>
                <div className={styles.cardImgHolder}>
                    <motion.img
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            transition
                        }}
                        className={styles.imgOfThumbnail}
                        src={image}
                        alt={title}/>
                </div>
                </Link>
                <motion.div
                    exit={{
                        opacity: 0
                    }}
                    transition={transition}
                    className={styles.projectContent}>
                    <p className={styles.titleOfTheProjects}>{title}</p>
                    <p className={styles.projectsInfo}>{description}</p>
                </motion.div>
                <motion.div
                    exit={{
                        opacity: 0
                    }}
                    transition={transition}
                    component="ul"
                    className={classes.root}>
                    {
                        chipData.map((data) => {
                            let icon;

                            if (data.label === 'React') {
                                icon = <GrProjects/>;
                            }

                            return (
                                <li key={data.key}>
                                    <Chip
                                        icon={icon}
                                        label={data.label}
                                        disabled="disabled"
                                        className={classes.chip}/>
                                </li>
                            );
                        })
                    }
                </motion.div>
                <motion.div
                    exit={{
                        opacity: 0
                    }}
                    transition={transition}
                    className={styles.footerOfBtn}>
                    <p>Jigme T Namgyal</p>
                    <Link to={link}>
                        <p>View Projects</p>
                    </Link>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
export default ProjectsCard
