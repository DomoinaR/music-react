import React from "react";

/* -- import components -- */

/* -- import css -- */
import './css/BirthLoc.css'
/* -- import data -- */

/* -- import images -- */

/* -- import packages -- */
import Badge from '@material-ui/core/Badge';
import CakeIcon from '@material-ui/icons/Cake';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarsIcon from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    section1: {
      margin: theme.spacing(4, 1),
    },
    gridlisttile: {
        height: 60,
      },
  }));
const BirthLoc = ({begin,locationInfo,deezerFans}) => {
    const classes = useStyles();
	return (
        <GridList spacing={3} className={classes.gridList} cols={4} cellHeight={60}>
            <GridListTile key='birthday' cols={1}>
                <Typography align="left"><CakeIcon /> {begin}</Typography>
            </GridListTile>
            <GridListTile key='location' cols={2}>
                <Typography align="center"><LocationOnIcon />{locationInfo.join(' - ')}</Typography>
            </GridListTile>
            <GridListTile key='deezerfans' cols={1}>
                <Typography align="right"><StarsIcon />Deezer Fans: {deezerFans}</Typography>
            </GridListTile>
        </GridList>
        
	);
}

export default BirthLoc;




