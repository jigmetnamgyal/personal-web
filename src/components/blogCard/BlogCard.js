import styles from './blogcard.module.css';
import {Link} from 'react-router-dom';

const BlogCard = ({title, author, date, genre, image, hashtag, lilInfo}) => {
    return (
        <div className={styles.blogCardContainer}>
            <div className={styles.imgHolder}>
                <img className={styles.imgOfBlog} src={image} alt={title} />
            </div>        
            <div className={styles.blogContent}>
                <p>By <span className={styles.authorName}>{author}</span> | {date}</p>
                <h3>{title}</h3>
                <div className={styles.hashContainer}>
                {hashtag.map(hash=>(
                    <p>{hash}</p>
                ))}
                </div>
                <p className={styles.abstract}>{lilInfo}</p>
                <Link to="/comingsoon" className={styles.reading}>Continue Reading</Link>
            </div>        
        </div>
    )
}
export default BlogCard
