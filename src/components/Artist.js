import React from "react";

/* -- import components -- */
import About from './About';
import AboutMusic from './AboutMusic';
import Albums from './Albums';
import BirthLoc from './BirthLoc';
import Members from './Members';
import Urls from './Urls';

/* -- import css -- */
import './css/Artist.css'

/* -- import data -- */
import metallica from "../data/mettalica";

/* -- import packages -- */
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import DirectionsIcon from '@material-ui/icons/Directions';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from "@material-ui/core/Paper";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SearchIcon from '@material-ui/icons/Search';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme ,fade} from '@material-ui/core/styles';
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(2)
  },
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 300,
      
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
}));

const Artist = () => {
  let abstract = metallica.abstract;
  const classes = useStyles();
  const theme = useTheme();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Wasabi Junior
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Container maxWidth="lg"  >
        <main>
          <Grid container spacing={10} className={classes.mainGrid} component={Paper}>
            <Grid item xs={12} md={4} className={classes.centerImg}>
              <Typography variant="h6" gutterBottom>
              Metallica
              </Typography>
              <Card className={classes.root}>
                <CardMedia
                  component="img"
                  className={classes.cover}
                  image={metallica.picture.big}
                  title="Live from space album cover"
                />
              </Card>
              <Members members={metallica.members} />
              <AboutMusic associatedMusicalArtist={metallica.associatedMusicalArtist} 
                              genres={metallica.genres} dbp_genre={metallica.dbp_genre}
                              labels={metallica.labels} recordLabel={metallica.recordLabel}/>
                
            </Grid>
            <Grid className={Artist.scrollGrid} item xs={12} md={8} >
              <BirthLoc begin={metallica.lifeSpan.begin} locationInfo={metallica.locationInfo} deezerFans={metallica.deezerFans} />
              
              <Urls />
              <Divider variant="fullWidth" />
              <About />
              
              <GridList cellHeight={150} spacing={1}  cols={1} >
                <GridListTile key={metallica._id || 1} cols={1}>
                  <Albums albums={metallica.albums} />
                 </GridListTile>
              </GridList>
              
              
            </Grid>
          </Grid>
          <Grid container spacing={10} className={classes.mainGrid} component={Paper}>
            <Grid item xs={12} md={4} className={classes.centerImg}> </Grid>
            <Grid item xs={12} md={8} className={classes.centerImg}>
            </Grid>
          </Grid>
          <Grid container spacing={10} className={classes.mainGrid} component={Paper}>
            <Grid item xs={12} md={12} className={classes.centerImg}>
             
            </Grid>
          </Grid>
        </main>
    </Container>
    </React.Fragment>
  );
};

export default Artist;
