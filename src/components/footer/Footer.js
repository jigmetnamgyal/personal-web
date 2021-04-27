import styles from './footer.module.css';
import {AiOutlineInstagram,AiOutlineGithub, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import me from '../../assets/me.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerChildOneContainer}>
                <div className={styles.footerOne}>
                    <div className={styles.titleHolder}>
                        <img className={styles.imgLogo} src={me} alt="me pic"/>
                        <h5>Jigme T Namgyal</h5>
                    </div>

                    <p>Hi! My name is Jigme Tashi Namgyal and I am from Bhutan. I am Seeking to be inspired, to envision the unlikely, to work hard for things
                        that are worth it, and to be surrounded by those who bring out the best in me.</p>
                    <div className={styles.footerOneMediaContainer}>
                        <a
                            href="https://www.instagram.com/jigmetashinamgyal/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.footerInsta}><AiOutlineInstagram/>
                        </a>
                        <a
                            href="https://www.facebook.com/Mugiwara.D.Jigme619/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.footerFacebook}><AiFillFacebook/>
                        </a>
                        <a href="https://twitter.com/JigmeTashiNamg1" rel="noopener noreferrer" target="_blank" className={styles.footerTwitter}><AiOutlineTwitter/>
                        </a>
                        <a href="https://www.linkedin.com/in/jigme-tashi-namgyal-511a811a3/" rel="noopener noreferrer" target="_blank" className={styles.footerLinkedin}><AiFillLinkedin/>
                        </a>
                        <a href="https://github.com/JigmeT123" rel="noopener noreferrer" target="_blank" className={styles.footerLinkedin}><AiOutlineGithub/>
                        </a>
                    </div>
                </div>

                <div className={styles.footerTwo}>
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/bookShelf">BookShelf</Link>
                    <Link to="/books">Books Review</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                <div className={styles.footerFour}>
                    <h4>About Us</h4>
                    <Link to="/aboutMe">About Me</Link>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footerChildTwoContainer}>
                <div className={styles.footerTwoContainer}>
                    <p>
                        &copy;Jigme T Namgyal 2021-
                        <span>
                           all rights reserved</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer