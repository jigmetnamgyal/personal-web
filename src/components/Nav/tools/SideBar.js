import React from 'react'
import styles from './side.module.css';
import {Link} from 'react-router-dom';
import {ImCross} from 'react-icons/im'
import {GoHome} from 'react-icons/go'
import {MdPersonPin,MdRateReview} from 'react-icons/md';
import {GiBookshelf} from 'react-icons/gi';
import {ImBlog} from 'react-icons/im';
import {AiFillProject} from 'react-icons/ai';

const SideBar = ({close, show}) => {
    
    return (
        <div className={`${styles.sidebar} ${show && styles.open}`}>
            <div className={styles.sidebarHeader}>
                <p className={styles.logo}>Jigme T Namgyal</p>
                <ImCross className={styles.cross} onClick={close}/>
            </div>
            <ul>
                <li><Link to="/"><GoHome className="icons" /> Home</Link></li>
                <li><Link to="/aboutMe"><MdPersonPin className="icons" /> About Me</Link></li>
                <li><Link to="/bookShelf"><GiBookshelf className="icons" /> Bookshelf</Link></li>
                <li><Link to="/books"><MdRateReview className="icons" /> Books Review</Link></li>
                <li><Link to="/blog"><ImBlog className="icons" /> Blog</Link></li>
                <li><Link to="/projects"><AiFillProject className="icons" /> Projects</Link></li>
            </ul>
        </div>
    )
}

export default SideBar