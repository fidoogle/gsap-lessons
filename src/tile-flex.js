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

const properties = [
    {name: 'Rancho Bernardo Properties'},
    {name: 'Fisher Business'},
    {name: 'Smeal College'},
    {name: 'Facilities at Haas'},
    {name: 'Henry Company'},
    {name: 'GNT Realty Partners'},
    {name: 'UWF College of Business'},
    {name: 'Arcadia Business Park'},
    {name: 'UTSA College of Business'},
    {name: 'Pacific Point at Douglas'},
    {name: 'CA Commercial'},
    {name: 'Herbert Hugo'},
    {name: 'Spears Business'},
    {name: 'McCombs Business School'},
    {name: 'Livingston Rutgers'},
    {name: 'Diller Scofidio'},
    {name: 'Darla Moore School'},
    {name: 'Orson West Partners'},
    {name: 'Bradford Property Mgmt'},
    {name: 'Quartz Realty Group'},
]

export default function FullWidthGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.flexContainer}>
            {properties.map((o, index) => (
                <SampleCardFlex name={o.name} key={o.name} index={index}/>
            ))}
        </div>
    );
}
