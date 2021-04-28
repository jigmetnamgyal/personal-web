import styles from './navbar.module.css';
import Ham from './tools/HamBurger';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {GoHome} from 'react-icons/go'
import {MdPersonPin,MdRateReview} from 'react-icons/md';
import {GiBookshelf} from 'react-icons/gi';
import {ImBlog} from 'react-icons/im';
import {AiFillProject} from 'react-icons/ai';

const Navbar = ({hamHandler}) => {
    const [count, setCount] = useState(0);
    return (
        <header className={styles.navBar}>
                <div className={styles.hamHolder}>
                    <Ham click = {hamHandler}/>
                </div>
                <div className={styles.navbarLogo}>
                    <p>Jigme T Namgyal</p>
                </div>
                   
                <nav className={styles.header__navigation}>
                    <ul>
                        <Link to="/"><GoHome className="icons" /> Home</Link>
                        <Link to="/aboutMe"><MdPersonPin className="icons" /> About Me</Link>
                        <Link to="/bookShelf"><GiBookshelf className="icons" /> Bookshelf</Link>
                        <Link to="/books"><MdRateReview className="icons" /> Books Review</Link>
                        <Link to="/blog"><ImBlog className="icons" /> Blog</Link>
                        <Link to="/projects"><AiFillProject className="icons" /> Projects</Link>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar
