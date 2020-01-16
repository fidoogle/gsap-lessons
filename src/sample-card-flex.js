import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { gsap, Power3, ScrollToPlugin } from 'gsap/all';


const useStyles = makeStyles(theme => ({
    card: {
        width: 350,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    flexContainer: {
        width: '350px',
        margin: '15px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)'
    },
    positionAbsolute: {
        position: 'relative'
    }
}));

gsap.registerPlugin(ScrollToPlugin);

export default function SampleCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [cardExpanded, setCardExpanded] = useState(false);
    const [boundingClientRect, setBoundingClientRect] = useState(null);


    let oneImage = useRef(null)
    let oneTitle = useRef(null)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCardExpandClick = (event) => {
        setCardExpanded(!cardExpanded);
        if (cardExpanded) {
            gsap.to(oneImage, 1, {
                width: 350,
                height: 200,
                top: boundingClientRect.top,
                left: boundingClientRect.left,
                //xPercent: 0,
                position: 'static',
                ease: Power3.easeOut
            })
            gsap.to(oneTitle, 1, {
                top: boundingClientRect.top - 100,
                left: boundingClientRect.left,
                position: 'static',
                ease: Power3.easeOut
            })
            window.scrollTo(0,boundingClientRect.top)
        }
        else {
            let element = event.target;
            setBoundingClientRect(element.getBoundingClientRect());
            gsap.to(oneImage, 1, {
                width: 700,
                height: 300,
                top:0,
                left:0,
                //xPercent:-50,
                position: 'absolute',
                ease: Power3.easeOut
            })
            gsap.to(oneTitle, 1, {
                top:320,
                left:40,
                position: 'absolute',
                ease: Power3.easeOut
            })
            window.scrollTo(0,0)
        }
    };

    return (
        <div className={classes.flexContainer}>
            <CardHeader ref={el => { oneTitle = el }} 
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Rancho Bernardo Properties"
                subheader="114 Lasoya Dr"
            />
            
            <img src="/property.jpg" 
                width="100%" 
                alt="Rancho Bernardo Properties" 
                ref={el => { oneImage = el }}  
                onClick={handleCardExpandClick}
                style={{cursor: 'pointer'}}
                />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Typography>
            </CardContent>
            
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
          </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
          </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
            </Collapse>
        </div>
    );
}
