import styles from './book.module.css';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2)
        }
    }
}));

const Bookshelf = () => {
    const classes = useStyles();
    return (
        <div className={styles.bookShelf}>
            <div className={styles.headerAbout}>
                <p className={styles.contentHeader}>Bookshelf</p>
            </div>
            <div className={styles.bookshelfMainContent}>
                <div className={styles.booksList}>
                    
                    <div className={classes.root}>
                        <Pagination shape="rounded" showFirstButton showLastButton count={6} color="secondary"/>
                    </div>
                </div>
                <div className={styles.popularPost}></div>
            </div>
        </div>
    )
}

export default Bookshelf;