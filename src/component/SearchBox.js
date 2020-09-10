import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { pxToRem, pxToVw, pxToVh } from './../theme';
import { searchQuery, handlerClicked } from './../action/githubAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '1.2rem',
    flexDirection: 'row',
  },
  searchTextField: {
    fontSize: pxToRem(22.5),
  },
  searchInput: {
    fontSize: '1rem',
    color: '#FFFFFF',
  },
  compareBtn: {
    position: 'relative',
    left: pxToVw(14),
    backgroundColor: '#537895',
    color: '#FFFFFF',
    height: pxToVh(63),
    width: pxToVw(182),
    borderRadius: pxToRem(30),
  },
}));

function SearchBox() {
  const searchQueryValue = useSelector(
    (state) => state.githubReducer.searchQueryValue
  );
  const dispatch = useDispatch();
  const searchQueryString = (data) => dispatch(searchQuery(data));
  const startDataFetch = (userName) => dispatch(handlerClicked(userName));

  const handleFetchgitData = (userName) => {
    if (userName && userName.length > 0) {
      startDataFetch(userName);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.searchArea}>
        <TextField
          id='outlined-search'
          label=''
          type='search'
          placeholder='Enter Username'
          classes={{ root: classes.searchTextField }}
          variant='outlined'
          value={searchQueryValue}
          onChange={(e) => searchQueryString(e.target.value)}
        />
      </div>

      <Button
        onClick={(e) => handleFetchgitData(searchQueryValue)}
        variant='outlined'
        className={classes.compareBtn}
      >
        Compare
      </Button>
    </div>
  );
}

export default SearchBox;
