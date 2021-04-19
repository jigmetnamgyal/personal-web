import styles from './book.module.css';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {bookshelfData} from './bookshelfData';
import Rating from '@material-ui/lab/Rating';
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
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
                    {bookshelfData.map((data) => (
                        <div key={data.id} className={styles.bookListMainContent}>
                            <div className={styles.imgCoverHolder}>
                                <img className={styles.imgCover} src={data.imgName} alt={data.bookName} />
                            </div>
                            <div className={styles.infoBookHolder}>
                            <div className={styles.borderLine1}></div>
                                <p className={styles.bookName1}>{data.bookName}</p>
                                <div>
                                    <p className={styles.authName1}>{data.author}</p>
                                    <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
                                </div>
                                <p className={styles.infoBook}>{data.lilAboutBook}</p>
                                <Link to="/"><Button className={styles.btnRead}>Read reviews</Button></Link>
                                <div className={styles.borderLine}></div>
                            </div>
                        </div>
                    ))}
                    <div className={classes.root}>
                        <Pagination shape="rounded" showFirstButton showLastButton count={4} color="secondary"/>
                    </div>
                </div>
                <div className={styles.popularPost}>
                    <div className={styles.titlePopular}>
                        <p className={styles.popTitle}>Popular Posts</p>
                    </div>
                    <div className={styles.mainPopPost}>
                        <div className={styles.postss}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookshelf;