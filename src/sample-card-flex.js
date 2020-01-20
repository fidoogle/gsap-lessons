import React, { useContext, useRef, useState } from 'react';
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
import { StoreContext } from './stores/store'



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
    }
}));

gsap.registerPlugin(ScrollToPlugin);

export default function SampleCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [cardExpanded, setCardExpanded] = useState(false);
    const [boundingClientRect, setBoundingClientRect] = useState(null);
    const { ['appFunctions']: [appFuncs, setAppFuncs] } = useContext(StoreContext); //fancy destructuring
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext); //fancy destructuring

    let oneImage = useRef(null)
    let oneTitle = useRef(null)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCardExpandClick = (event) => {
        event.preventDefault()
        setCardExpanded(!cardExpanded);
        if (cardExpanded) {
            //oneImage.setAttribute("style", "z-index: 0;")
            //oneTitle.setAttribute("style", "z-index: 0;")
            gsap.to(oneImage, {
                duration: 1,
                width: 350,
                height: 200,
                top: boundingClientRect.top,
                left: boundingClientRect.left,
                position: 'static',
                'z-index': 0,
                ease: Power3.easeOut
            })
            gsap.to(oneTitle, {
                duration: 1,
                top: boundingClientRect.top - 100,
                left: boundingClientRect.left,
                position: 'static',
                'z-index': 0,
                ease: Power3.easeOut
            })
            appFuncs.hideOverlay(dataApp.oneOverlay);
            window.scrollTo(0,boundingClientRect.top)
        }
        else {
            let element = event.target;
            setBoundingClientRect(element.getBoundingClientRect());
            oneImage.setAttribute("style", "z-index: 300;")
            oneTitle.setAttribute("style", "z-index: 300;")
            gsap.to(oneImage, 1, {
                width: 700,
                height: 300,
                top:0,
                left:0,
                position: 'absolute',
                ease: Power3.easeOut
            })
            gsap.to(oneTitle, 1, {
                top:320,
                left:40,
                position: 'absolute',
                ease: Power3.easeOut
            })
            appFuncs.showOverlay(dataApp.oneOverlay);
            window.scrollTo(0,0)
        }
    };

    return (
        <div>
        
        <div className={classes.flexContainer}>
            <CardHeader ref={el => { oneTitle = el }} 
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.name.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.name}
                subheader="114 Lasoya Dr"
            />
            
            <img src={`/property${props.index}.jpg`}
                width="100%"
                height="200"
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
                    <Typography paragraph>Notes:</Typography>
                    <Typography paragraph>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </Typography>
                    
                </CardContent>
            </Collapse>
        </div>
        </div>
    );
}
