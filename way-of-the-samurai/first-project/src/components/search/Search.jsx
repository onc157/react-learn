import { Grid, TextField } from '@material-ui/core';
import useStyles from './style';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  const classes = useStyles();

  return (
    <div className='search'>
      <div className={classes.root}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="search-twitter-icon-grid" label="Search Twitter" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Search