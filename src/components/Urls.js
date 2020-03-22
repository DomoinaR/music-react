import React from 'react';
/* -- import components -- */
/* -- import css -- */
import './css/Urls.css';
/* -- import data -- */
/* -- import images -- */
/* -- import packages -- */
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gridList: {

  },
  gridlisttile: {
    height: 60,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function Urls() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.mainGrid}>
      
      <Grid item xs={12} md={8} offset={4}>
        <GridList spacing={4} className={classes.gridList} cols={19} cellHeight={40}>
     
          <GridListTile key='Allmusic'>
              <Link href="#"> <Avatar heigth={30} width={30} alt="Allmusic icon" src="/icon/allmusic_icon.svg"  className={classes.small}  /></Link> 
          </GridListTile>

          <GridListTile key='Amazon'>
            <Link href="#"> <Avatar alt="Amazon icon" src="/icon/amazon_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Deezer'>
            <Link href="#"> <Avatar alt="Deezer icon" src="/icon/deezer_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Discog'>
            <Link href="#"> <Avatar alt="Discogs icon" src="/icon/discogs_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Discoveryhub'>
            <Link href="#"> <Avatar alt="Discoveryhub icon" src="/icon/discoveryhub_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Facebook'>
            <Link href="#"> <Avatar alt="Facebook icon" src="/icon/facebook_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Itunes'>
            <Link href="#"> <Avatar alt="Itunes icon" src="/icon/itunes_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Lastfm'>
            <Link href="#"> <Avatar alt="Lastfm icon" src="/icon/lastfm_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Lyricswikia'>
            <Link href="#"> <Avatar alt="Lyricswikia icon" src="/icon/lyricswikia_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Musicbrainz'>
            <Link href="#"> <Avatar alt="Musicbrainz icon" src="/icon/musicbrainz_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Myspace'>
            <Link href="#"> <Avatar alt="Myspace icon" src="/icon/myspace_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Purevolume'>
            <Link href="#"> <Avatar alt="Purevolume icon" src="/icon/purevolume_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Rateyourmusic'>
            <Link href="#"> <Avatar alt="Rateyourmusic icon" src="/icon/rateyourmusic_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Soundcloud'>
            <Link href="#"> <Avatar alt="Soundcloud icon" src="/icon/soundcloud_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Spotify'>
            <Link href="#"> <Avatar alt="Spotify icon" src="/icon/spotify_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Twitter'>
            <Link href="#"> <Avatar alt="Twitter icon" src="/icon/twitter_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Website'>
            <Link href="#"> <Avatar alt="Website icon" src="/icon/website_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Wikipedia'>
            <Link href="#"> <Avatar alt="Wikipedia icon" src="/icon/wikipedia_icon.svg"  className={classes.small} /></Link>
          </GridListTile>

          <GridListTile key='Youtube'>
            <Link href="#"> <Avatar alt="Youtube icon" src="/icon/youtube_icon.svg"  className={classes.small} /></Link>
          </GridListTile>
            
          </GridList>
      </Grid>
    </Grid>  
  );
}
