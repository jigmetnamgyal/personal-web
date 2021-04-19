import styles from './book.module.css';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {bookshelfData} from './bookshelfData';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            marginBottom: "40px"
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
                    {bookshelfData.map((data,key) => (
                        <div key={key} className={styles.bookListMainContent}>
                            <div className={styles.imgCoverHolder}>
                                <img className={styles.imgCover} src={data.imgName} alt={data.bookName} />
                            </div>
                            <div className={styles.infoBookHolder}>
                                <p className={styles.infoBook}>{data.lilAboutBook}</p>
                            </div>
                        </div>
                    ))}
                    <div className={classes.root}>
                        <Pagination shape="rounded" showFirstButton showLastButton count={6} color="secondary"/>
                    </div>
                </div>
                <div className={styles.popularPost}>
                    {/* <p>Popular Post</p> */}
                </div>
            </div>
        </div>
    )
}

export default Bookshelf;