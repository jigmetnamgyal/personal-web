import {NavLink} from 'react-router-dom';
import {GoHome} from 'react-icons/go'
import {MdPersonPin} from 'react-icons/md';
import {GiBookshelf} from 'react-icons/gi';
import {ImBlog} from 'react-icons/im';
import {AiFillProject, AiOutlineMenu} from 'react-icons/ai';
import {Nav, Navbar} from 'react-bootstrap'
import './navbar.css';

const NavigationBar = () => {
    return (
        <Navbar
            className="navbar"
            collapseOnSelect
            expand="lg"
            variant="dark">
            <Navbar.Brand className="navbar-logo" href="/">Jigme Tashi Namgyal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <AiOutlineMenu className="menu"/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <div className="another"></div>
                <Nav className="mr-auto navRight">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/' exact>
                            <GoHome className="icons" /> Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/aboutMe' exact>
                            <MdPersonPin className="icons" /> About Me
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/books' exact>
                            <GiBookshelf className="icons" /> Books
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/blog' exact>
                            <ImBlog className="icons" /> Blog
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to='/projects' exact>
                            <AiFillProject className="icons" /> projects
                        </NavLink>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
