import React from 'react'
import styles from './ham.module.css';
import {HiOutlineMenuAlt1} from 'react-icons/hi';

const HamBurger = ({click}) => {
    return (
        <button className={styles.hamburger} onClick={click}>
            <HiOutlineMenuAlt1 className={styles.hamLine}/>
        </button>
    )
}

export default HamBurger