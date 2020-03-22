import React from "react";

/* -- import css -- */

/* -- import components -- */
import Albums from "./Albums";
import Urls from "./Urls";

/* -- import data -- */
import metallica from "../data/mettalica";

/* -- import packages -- */
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StarBorderIcon from '@material-ui/icons';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
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
      color: theme.palette.primary.light,
    },
    gridList: {
      /*height: 100,*/
    },
  }));
const Main = () => {

  let abstract = metallica.abstract;
  const classes = useStyles();
  const theme = useTheme();
  return (
    <TableContainer component={Paper}>
      <Albums albums={metallica.albums} />
    </TableContainer>
  );
};

export default Main;