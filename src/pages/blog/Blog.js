import BlogCard from '../../components/blogCard/BlogCard';
import {blogCardData} from './blogCardData';
import {useState} from 'react';
import styles from './blog.module.css';
import ReactPaginate from 'react-paginate';
import {makeStyles} from '@material-ui/core/styles';
import Footer from '../../components/footer/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: "2000",
        marginTop: "50px",
        '& > * + *': {
            marginTop: theme.spacing(1)
        },
        '& > *': {
            marginTop: theme.spacing(2),
            marginBottom: "40px"
        }
    }
}));
const Blog = () => {
    const classes = useStyles();
    const [books, setBooks] = useState(blogCardData);
    const [pageNumber, setPageNumber] = useState(0);
    const booksPerPage = 6;
    const pagesVisited = pageNumber * booksPerPage;
    const pageCount = Math.ceil(books.length / booksPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    const displayBooks = books.slice(pagesVisited, pagesVisited + booksPerPage).map(
        data => (
            <BlogCard
                title={data.title}
                author={data.author}
                date={data.date}
                genre={data.genre}
                image={data.thumbnail}
                hashtag={data.hashtag}
                lilInfo={data.lilInfo}/>
        )
    )
    return (
        <div className={styles.mainBlogContainer}>

            <div className={styles.blogTitle}>
                <i>
                    <h3>“Anything worth doing well is worth doing poorly at first.”</h3>
                </i>
                <p>
                    ~ Ray Congdon</p>
            </div>
            <div className={styles.blogTitle1}>
                <i>
                    <h3>My Book Reviews</h3>
                </i>
                <p>
                    Discover New Perspectives</p>
            </div>
            <div className={styles.mainContentBlog}>
                <div className={styles.allPost}>
                    {
                        displayBooks
                    }
                </div>
                <div className={classes.root}>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={styles.paginationBttns}
                        previousLinkClassName={styles.prevBtn}
                        nextLinkClassName={styles.nextBtn}
                        disabledClassName={styles.paginationDisabled}
                        activeClassName={styles.paginationActive}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
