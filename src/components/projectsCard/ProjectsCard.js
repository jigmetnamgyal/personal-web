import styles from './projectsCard.module.css';
import Chip from '@material-ui/core/Chip';
import {GrProjects} from 'react-icons/gr';
import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

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


const ProjectsCard = ({difficulties, title, description, tags, image}) => {
    const classes = useStyles();
    const [chipData, setChipData] = useState(tags);
    return (
        <div className={styles.projectsCardContainer}>
            {
                difficulties === "Hard"
                    ? (<Chip color="secondary" label={difficulties}/>)
                    : (<Chip color="primary" label={difficulties}/>)
            }
            <div className={styles.cardImgHolder}>
              <img className={styles.imgOfThumbnail} src={image} alt={title} />
            </div>
            <div className={styles.projectContent}>
                <p className={styles.titleOfTheProjects}>{title}</p>
                <p className={styles.projectsInfo}>{description}</p>
            </div>
            <div component="ul" className={classes.root}>
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
                                    disabled
                                    className={classes.chip}/>
                            </li>
                        );
                    })
                }
            </div>
            <div className={styles.footerOfBtn}>
                <p>Jigme T Namgyal</p>
                <Link to=""><p>View Projects</p></Link>
            </div>
        </div>
    )
}
export default ProjectsCard
