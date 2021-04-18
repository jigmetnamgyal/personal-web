import styles from './book.module.css';

const Bookshelf = () => {
    return (
        <div className={styles.bookShelf}>
             <div className={styles.headerAbout}>
                <p className={styles.contentHeader}>Bookshelf</p>
             </div>
             <div className={styles.bookshelfMainContent}>
                 <div className={styles.booksList}></div>
                 <div className={styles.popularPost}></div>
             </div>
        </div>
    )
}

export default Bookshelf;