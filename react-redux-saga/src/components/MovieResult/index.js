import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import style from './style';

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const classes = style();

  const handleSeeMovie = () => {
    history.push(`/movie/${imdbID}`);
  };
  
  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img alt={Title} src={Poster} className={classes.poster}></img>
        </Grid>
        <Grid item className={classes.titleContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button color="primary" variant="contained" onClick={handleSeeMovie}>More</Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withRouter(MovieResult);
