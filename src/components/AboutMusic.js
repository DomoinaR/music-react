import React from "react";

/* -- import components -- */

/* -- import css -- */

/* -- import data -- */

/* -- import images -- */

/* -- import packages -- */
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import Paper from '@material-ui/core/Paper';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PhoneIcon from '@material-ui/icons/Phone';
import PropTypes from 'prop-types';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';

import { makeStyles } from '@material-ui/core/styles';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const AboutMusic = ({associatedMusicalArtist,genres,dbp_genre,labels,recordLabel}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <div>
        
          <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab label="Associated artist(s)"  {...a11yProps(0)} />
              <Tab label="Genre"  {...a11yProps(1)} />
              <Tab label="Genre (DBpedia)"  {...a11yProps(2)} />
              <Tab label="Label"  {...a11yProps(3)} />
              <Tab label="Label (DBpedia)"  {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          
        </div>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                </TableHead>
                <TableBody>
            
                <TableRow key='associatedArtist'>
                    <TableCell component="th">
                        Associated artist(s)
                    </TableCell>
                    <TableCell align="left">{associatedMusicalArtist.join(" - ")}</TableCell>
                </TableRow>
                <TableRow key='genre'>
                    <TableCell component="th">
                        Genre
                    </TableCell>
                    <TableCell align="left">{genres.join(" - ")}</TableCell>
                </TableRow>
                <TableRow key='genredbpedia'>
                    <TableCell component="th">
                        Genre (DBpedia)
                    </TableCell>
                    <TableCell align="left">{dbp_genre.join(" - ")}</TableCell>
                </TableRow>
                <TableRow key='label'>
                    <TableCell component="th">
                        Label
                    </TableCell>
                    <TableCell align="left">{labels.join(" - ")}</TableCell>
                </TableRow>
                <TableRow key='labeldbpedia'>
                    <TableCell component="th">
                        Label (DBpedia)
                    </TableCell>
                    <TableCell align="left">{recordLabel.join(" - ")}</TableCell>
                </TableRow>
            </TableBody>
            </Table>            
        </TableContainer>
        </div>
    );
};

export default AboutMusic;
