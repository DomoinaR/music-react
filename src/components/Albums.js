import React from "react";

/* -- import components -- */

/* -- import css -- */
import './css/Albums.css'

/* -- import data -- */
/* -- import images -- */

/* -- import packages -- */
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListItemText';
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme ,fade} from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`ItemS ${index}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};
const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(2),
    textAlign: "right"
  },
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      heigth: 100,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      height: '80%',     // as an example I am modifying width and height
      width: '80%',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    root1: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 400,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const Albums = ({albums}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const albumSize = albums.length;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Grid container className={classes.mainGrid} component={Paper}>
          <Grid item xs={12} md={12}>
          <div className={classes.root1}>
           
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {albums.map(function(object, i){
          return <Tab key={`Album ${i}`} label={`Album ${i+1}`} {...a11yProps({i})}
        
           />
        })}
      </Tabs>
      {albums.map((album,index)=>(
      <TabPanel key={`Albumdetail ${index}`} value={value} index={index}>
        <GridList key={album._id} spacing={0} cellHeight={200} className={classes.gridList} cols={3} >
            <GridListTile key={album.small} cols={1}>
               <Card className={classes.root}>
                  <CardMedia
                    component="img"
                    className={classes.cover}
                    src={album.cover?.medium} 
                    image={album.cover?.medium} 
                    heigth={80}
                    width={80}
                    title="Live from space album cover"
                  />
                </Card>
            </GridListTile >
            <GridListTile key={album.small || 1} cols={2}>
            <div className={classes.root}>
              <FixedSizeList height={200} width={500} itemSize={22} itemCount={album.songs.length}>
                {renderRow}
              </FixedSizeList>
            </div>

                {album.songs.map(song=>( 
                     <ol key={song._id}>
                        {song.title}
                     </ol>
                ))}
               
              
              
            </GridListTile >
          </GridList>
      
      </TabPanel>
      
      ))}
    </div>
        
      </Grid>
      </Grid>

  );
};

export default Albums;
