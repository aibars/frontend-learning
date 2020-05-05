import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

export default () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = e => setSearchText(e.target.value);
  const handleCleanText = e => {
    console.log(1)
  };
  const handleSearch = e => {
    console.log(1)
  };
  return (
    <Container>
      <Card>
        <Grid container>
          <Grid>
            <Typography>
              Welcome!
            </Typography>
          </Grid>
          <label>
            Icon
          </label>
          <Grid>

          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Search..."
          onChange={handleSearchTextChange}
        >
        </TextField>
        <Grid>
          <Button variant="contaied" onClick={handleCleanText}>
            Clear
          </Button>
          <Button variant="contaied" color="primary" size="large" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Card>
    </Container>
  )
}