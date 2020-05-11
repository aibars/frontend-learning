import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
import styles from './style';
import { MovieIcon } from '../../icons';

export default ({ history }) => {
  const [searchText, setSearchText] = useState('');
  const classes = styles();
  const handleSearchTextChange = e => setSearchText(e.target.value);

  const handleCleanText = e => {
    setSearchText('');
  };

  const handleSearch = e => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>
              Welcome!
            </Typography>
          </Grid>
          <label>
            <MovieIcon className={classes.movieIcon} />
          </label>
          <Grid>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Search..."
          onChange={handleSearchTextChange}
          className={classes.textFieldSearch}
        >
        </TextField>
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleCleanText}>
            Clear
          </Button>
          <Button className={classes.searchButton} variant="contained" color="primary" size="large" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Card>
    </Container>
  )
}