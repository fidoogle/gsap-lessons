import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SampleCard from './sample-card-flex'
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.flexContainer}>
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
                
                    <SampleCardFlex/>
                
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
                
                    <SampleCard/>
                
        </div>
    );
}
