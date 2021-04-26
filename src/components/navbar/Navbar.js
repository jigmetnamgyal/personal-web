import {NavLink} from 'react-router-dom';
import {GoHome} from 'react-icons/go'
import {MdPersonPin,MdRateReview} from 'react-icons/md';
import {GiBookshelf} from 'react-icons/gi';
import {ImBlog} from 'react-icons/im';
import {AiFillProject, AiOutlineMenu} from 'react-icons/ai';
import {Nav, Navbar} from 'react-bootstrap'
import './navbar.css';
import {motion} from 'framer-motion';

const NavigationBar = () => {
    return (
        <Navbar
            className="navbar"
            collapseOnSelect
            expand="lg"
            variant="dark">
            <Navbar.Brand className="navbar-logo" href="/">Jigme T Namgyal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <AiOutlineMenu className="menu"/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <div className="another"></div>
                <Nav className="mr-auto navRight">
                    <motion.li whileHover={{ scale: 1.05}} className="nav-item active">
                        <NavLink className="nav-link" to='/' exact>
                            <GoHome className="icons" /> Home
                        </NavLink>
                    </motion.li>
                    <motion.li whileHover={{scale:1.05 }} className="nav-item">
                        <NavLink className="nav-link" to='/aboutMe' exact>
                            <MdPersonPin className="icons" /> About Me
                        </NavLink>
                    </motion.li>
                    <motion.li whileHover={{scale:1.05 }} className="nav-item">
                        <NavLink className="nav-link" to='/bookShelf' exact>
                            <GiBookshelf className="icons" /> Bookshelf
                        </NavLink>
                    </motion.li>
                    <motion.li whileHover={{scale:1.05 }} className="nav-item">
                        <NavLink className="nav-link" to='/books' exact>
                            <MdRateReview className="icons" /> Books Review
                        </NavLink>
                    </motion.li>
                    <motion.li whileHover={{scale:1.05 }} className="nav-item">
                        <NavLink className="nav-link" to='/blog' exact>
                            <ImBlog className="icons" /> Blog
                        </NavLink>
                    </motion.li>

                    <motion.li whileHover={{scale:1.05 }} className="nav-item">
                        <NavLink className="nav-link" to='/projects' exact>
                            <AiFillProject className="icons" /> projects
                        </NavLink>
                    </motion.li>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default NavigationBar
