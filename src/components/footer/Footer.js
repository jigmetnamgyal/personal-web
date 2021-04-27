import styles from './footer.module.css';
import {AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import me from '../../assets/me.png';

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
                            href="https://www.instagram.com/wangchuk_k/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.footerInsta}><AiOutlineInstagram/>
                        </a>
                        <a
                            href="https://www.facebook.com/Wangchuk-Kinga-Beats-2199505916803723"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.footerFacebook}><AiFillFacebook/>
                        </a>
                        {/* <a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerTwitter}><AiOutlineTwitter/>
                        </a>
                        <a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerLinkedin}><AiFillLinkedin/>
                        </a> */
                        }
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