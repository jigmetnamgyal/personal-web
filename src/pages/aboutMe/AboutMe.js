import {useState} from 'react';
import styles from './about.module.css';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import me from '../../assets/me.JPG';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '500px',
        margin: '20px'
    },
    media: {
        height: 0,
        paddingTop: '50.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme
            .transitions
            .create('transform', {duration: theme.transitions.duration.shortest})
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

const AboutMe = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={styles.aboutContainer}>

            <Card className={classes.root}>
                <CardHeader
                    title="Jigme T Namgyal"
                    subheader="Nincompoop Since 2001"/>
               <CardMedia className={classes.media} image={me} title="JigmeTN"/>
                <CardContent>
                    <Typography variant="body2" color="textPrimary" component="p">
                    My name is Jigme Tashi Namgyal and I am from Trashigang, Bhutan. I am currently pursuing my education in Bs. Computer Science in ADA University in Baku, Azerbaijan. Due to the covid situation I decided to take a gap year and while I am at it, I am trying to skill up as college is not enough to excel in life. 
                    <br />
                    <br />
                    Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.
                    <br /> 
                    <br /> 
                    I am currently working as a software engineer at Selise Bhutan</Typography>
                </CardContent>
                <CardActions disableSpacing="disableSpacing">
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"></IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default AboutMe
