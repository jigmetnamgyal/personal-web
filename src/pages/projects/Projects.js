import styles from './project.module.css';
import {projectData} from './projectsdata';
import {useState} from 'react';
import ProjectsCard from '../../components/projectsCard/ProjectsCard';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer/Footer';
const Projects = () => {
    const [projects, setProjects] = useState(projectData);
    const projectsDisplay = projects.map((data) => (
        <ProjectsCard
            className={styles.projectsCardLol}
            difficulties={data.difficulties}
            title={data.projectName}
            description={data.SmallInfo}
            tags={data.projectsTag}
            image={data.thumbnail}
            link={`/projects/${data.id}`}
            team={data.team}/>
    ))
    return (

        <div className={styles.projectsMainContainer}>
            <div className={styles.headerAbout}>
                <p className={styles.contentHeader}>Projects</p>
            </div>
            <div className={styles.projectsContentMain}>
                {projectsDisplay}
            </div>
            <Footer/>
        </div>

    )
}

export default Projects
