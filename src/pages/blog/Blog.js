import BlogCard from '../../components/blogCard/BlogCard';
import {blogCardData} from './blogCardData';
import styles from './blog.module.css';

const Blog = () => {
    return (
        <div className={styles.mainBlogContainer}>

            <div className={styles.blogTitle}>
                <i><h3>“Anything worth doing well is worth doing poorly at first.”</h3></i>
                <p> ~ Ray Congdon</p>
            </div>
            <div className={styles.blogTitle1}>
                <i><h3>Featured Post</h3></i>
                <p> Discover New Perspectives</p>
            </div>
            <div className={styles.mainContentBlog}>
                <div className={styles.allPost}>
                    {
                        blogCardData && blogCardData.map(data => (
                            <BlogCard
                                title={data.title}
                                author={data.author}
                                date={data.date}
                                genre={data.genre}
                                image={data.thumbnail}
                                hashtag={data.hashtag}
                                lilInfo={data.lilInfo}/>
                        ))
                    }
                </div>
                <div className={styles.popularPost}>
                    <div className={styles.titlePopular}>
                        <p className={styles.popTitle}>Latest Posts</p>
                    </div>
                    <div className={styles.mainPopPost}>
                        <div className={styles.postss}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog
