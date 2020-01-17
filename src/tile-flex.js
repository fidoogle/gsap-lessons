import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SampleCardFlex from './sample-card-flex'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
}));

export default function FullWidthGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.flexContainer}>
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCardFlex/>
                
        </div>
    );
}
