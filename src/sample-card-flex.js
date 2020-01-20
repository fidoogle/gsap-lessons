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
            appFuncs.hideOverlay(dataApp.oneOverlay);
            console.log(boundingClientRect.top - 200)
            window.scrollTo(0,boundingClientRect.top - 200)

            //Allows top/left positioning with 'absolute'
            gsap.set(oneImage, {position: 'absolute', 'z-index': 300})
            gsap.set(oneTitle, {position: 'absolute', 'z-index': 300})

            gsap.fromTo(oneImage, .6,
                {
                    width: 700,
                    height: 300,
                    top: 0,
                    left: 0,
                },
                {
                    width: 350,
                    height: 200,
                    top: boundingClientRect.top,
                    left: boundingClientRect.left,
                    //ease: Power3.easeOut
                }
            )
            gsap.to(oneTitle, .6,
                {
                    top:320,
                    left:40,
                },
                {
                    top: boundingClientRect.top - 100,
                    left: boundingClientRect.left,
                    //ease: Power3.easeOut
                }
            )
            //Set back to static to contain elements in original place
            gsap.set(oneImage, {position: 'static', 'z-index': 0}) // better to set than to setAttribute
            gsap.set(oneTitle, {position: 'static', 'z-index': 0})
        }
        else {
            let element = event.target;
            setBoundingClientRect(element.getBoundingClientRect()); //TODO: this does not appear working
            let bounding = element.getBoundingClientRect();
            gsap.set(oneImage, {position: 'absolute', 'z-index': 300}) // better to set than to setAttribute
            gsap.set(oneTitle, {position: 'absolute', 'z-index': 300})
            gsap.fromTo(oneImage, .6,
                {
                    width: 350,
                    height: 200,
                    top: bounding.top,
                    left: bounding.left,
                }, 
                {
                    width: 700,
                    height: 300,
                    top:0,
                    left:0,
                    //ease: Power3.easeOut
                }
            )
            gsap.fromTo(oneTitle, .6, 
                {
                    top: bounding.top - 100,
                    left: bounding.left,
                },
                {
                    top:320,
                    left:40,
                    //ease: Power3.easeOut
                }
            )
            appFuncs.showOverlay(dataApp.oneOverlay);
            window.scrollTo(0,0)
        }
    };

    return (
        <div>
        
        <div className="flex-card">
            <CardHeader ref={el => { oneTitle = el }} 
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.property.name.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.property.name}
                subheader={props.property.address}
            />
            
            <img src={`/property${props.index}.jpg`}
                className="property-image"
                alt={props.name} 
                ref={el => { oneImage = el }}  
                onClick={handleCardExpandClick}
                />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="notes">
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
