import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SampleCard from './SampleCard'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <SampleCard/>
                </Grid>
            </Grid>
        </div>
    );
}
