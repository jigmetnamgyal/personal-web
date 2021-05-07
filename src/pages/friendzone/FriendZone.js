import styles from './friendzone.module.css';
import newsletter from '../../assets/newsletter.svg';
import {Grid, TextField, Button} from '@material-ui/core'
import {useState} from 'react';
import firebase from '../../firebase';
import Footer from '../../components/footer/Footer';
import { v4 as uuidv4 } from 'uuid';



const FriendZone = () => {
    const ref = firebase.firestore().collection('users');
    const [email, setEmail] = useState("");
    const nameHandler = e => {
        setEmail(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        let id = uuidv4();
        ref.doc(id).set({
            gmail: email
        }).catch((err) => {
            console.error(err);
        });
    }
    
    return (
        <div className={styles.friendzoneContainer}>
            <div className={styles.topPart}>
                <div className={styles.imgHolderNews}>
                    <img className={styles.imgNews} src={newsletter} alt="Newsletter"/>
                </div>
                <div className={styles.headerTitleNews}>
                    <h1>The Friendzone</h1>
                    <p>The Friendzone is my weekly(ish) email newsletter. It's totally free to
                        signup, so if you want to read more from me in your inbox, I'd love for you to
                        join the party.</p>
                </div>
            </div>
            <div className={styles.bottomPart}>
                <p>Join a growing community of more than 80,000 (🤯) friendly readers. Every Sunday I share actionable productivity tips, practical life advice, and high-quality insights from across the web, directly to your inbox.</p>
                <form className={styles.formContainer}>
                    <Grid className={styles.gridContainer} container="container">
                        <TextField
                            className={styles.textField}
                            multiline={true}
                            variant="outlined"
                            label="Email"
                            value={email}
                            onChange={nameHandler}
                            />
                        <Button onClick={submitHandler} className={styles.submitbtn}>Submit</Button>
                    </Grid>
                </form>
                <p>And if you'd like to read back through my previous emails and browse through the archives, you can find them below. Be warned, I've been writing this newsletter for a while so there's a fair few 😉.</p>
            </div>
            <Footer />
        </div>
    )
}

export default FriendZone
