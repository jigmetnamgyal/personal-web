import styles from './book.module.css';

const Bookshelf = () => {
    return (
        <div className={styles.bookShelf}>
             <div className={styles.headerAbout}>
                <p className={styles.contentHeader}>Bookshelf</p>
             </div>
             
        </div>
    )
}

export default Bookshelf;