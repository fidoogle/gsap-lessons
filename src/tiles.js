import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SampleCard from './sample-card'
import Chart from './chart'

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
    {name: 'Rancho Bernardo Properties',
    address: '114 Losoya Dr'},
    {name: 'Fisher Business',
    address: '1100 Woodlawn'},
    {name: 'Smeal College',
    address: '2505 Loop 410W'},
    {name: 'Facilities at Haas',
    address: '181611 Stone Oak Pkwy'},
    {name: 'Henry Company',
    address: '110 Houston St'},
    {name: 'GNT Realty Partners',
    address: '3434 Babcock'},
    {name: 'UWF College of Business',
    address: '3500 Hildebrand'},
    {name: 'Arcadia Business Park',
    address: '23230 Hwy 151'},
    {name: 'UTSA College of Business',
    address: '9000 Fredericksburg Rd'},
    {name: 'Pacific Point at Douglas',
    address: '4500 Culebra Rd'},
    {name: 'CA Commercial',
    address: '4004 Rigsby'},
    {name: 'Herbert Hugo',
    address: '7800 Wurzbach'},
    {name: 'Spears Business',
    address: '894500 Blanco Rd'},
    {name: 'McCombs Business School',
    address: '7600 Potranco Rd'},
    {name: 'Livingston Rutgers',
    address: '3003 SW Military Dr'},
    {name: 'Diller Scofidio',
    address: '2000 Goliad Rd'},
    {name: 'Darla Moore School',
    address: '56005 Commerce Ave'},
    {name: 'Orson West Partners',
    address: '4399 Walzem Rd'},
    {name: 'Bradford Property Mgmt',
    address: '1100 Nacogdoches Rd'},
    {name: 'Quartz Realty Group',
    address: '56000 San Pedro Ave'},
]

export default function FullWidthGrid(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.flexContainer}>
                {properties.map((o, index) => (
                    <SampleCard property={o} key={o.name} index={index}/>
                ))}
            </div>
            
        </>
    );
}
