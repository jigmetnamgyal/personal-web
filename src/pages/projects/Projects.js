import styles from './project.module.css';
import {projectData} from './projectsdata';
import {useState} from 'react';
import ProjectsCard from '../../components/projectsCard/ProjectsCard';

const Projects = () => {
    const [projects, setProjects] = useState(projectData);
    const projectsDisplay = projects.map((data) => (
        <ProjectsCard difficulties={data.difficulties} title={data.projectName} description={data.SmallInfo} tags={data.projectsTag} image={data.thumbnail}/>
    ))
    return (
        <div className={styles.projectsMainContainer}>
            <div className={styles.headerAbout}>
                <p className={styles.contentHeader}>Bookshelf</p>
            </div>
            <div className={styles.projectsContentMain}>
                {projectsDisplay}
            </div>
            
        </div>
        
    )
}

export default Projects
