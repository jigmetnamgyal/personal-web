import styles from './individualProjects.module.css';
import {useEffect, useState} from 'react';
import {indiProjectsData} from './indiProjectsData';

const IndividualProjects = (props) => {
    const [id, setId] = useState(null);
    useEffect(() => {
        let id = props.match.params.projectId;
        setId(id);
    }, [])
    const project = indiProjectsData[id];
    return (
        <div className={styles.individualProjectsContainer}>
            
        </div>
    )
}

export default IndividualProjects
