import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { handlerClicked } from '../action/githubAction';
import WarningIcon from '@material-ui/icons/Warning';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import Header from '../component/Header';
import SearchBox from '../component/SearchBox';
import { pxToVh, pxToRem } from '../theme';
import UserCard from './../component/UserCard';

const styles = {
  loadingDiv: {
    marginTop: pxToVh(102),
    width: '100vw',
    height: '50vh',
    color: '#fff',
    alignItems: 'center',
  },
  loadingFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconoverwrite: {
    fill: '#FFFFFF',
    width: '2vw',
    height: '4vh',
    display: 'inline-block',
    fontSize: pxToRem(24),
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    userSelect: 'none',
    flexShrink: '0',
  },
  cardArea: {
    position: 'relative',
    top: '7vh',
    left: '3vw',
  },
};
class GithubCompare extends Component {
  handleFetchgitData = (userName) => {
    this.props.startDataFetch(userName);
  };
  render() {
    const { classes, gitDataLoading, gitData, gitDataError } = this.props;
    return (
      <>
        <Header />
        <SearchBox />
        {gitDataLoading && (
          <div className={classNames(classes.loadingDiv, classes.loadingFlex)}>
            <CircularProgress
              style={{ color: '#FFFFFF', marginRight: '0.5rem' }}
            />
            Please wait
          </div>
        )}
        {gitDataError &&
          (console.log('error', gitDataError),
          (
            <div
              className={classNames(classes.loadingDiv, classes.loadingFlex)}
            >
              <WarningIcon
                classes={{
                  root: classes.iconoverwrite,
                }}
              />
              Something Went wrong!
            </div>
          ))}
        {gitData &&
          gitData.sort((a, b) => (a.followers > b.followers ? -1 : 1))}
        <Grid container justify='space-evenly' spacing={6}>
          {!gitDataLoading &&
            !gitDataError &&
            gitData &&
            gitData.map((gitUser, i) => (
              <Grid xs={12} md={4} sm={4} lg={4} xl={4}>
                <div className={classes.cardArea}>
                  <UserCard gitData={gitUser} key={i} />
                </div>
              </Grid>
            ))}
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  gitDataLoading: state.githubReducer.gitDataLoading,
  gitData: state.githubReducer.gitData,
  gitDataError: state.githubReducer.gitDataError,
  searchQueryValue: state.githubReducer.searchQueryValue,
});

const mapDispatchToProps = (dispatch) => ({
  startDataFetch: (userName) => dispatch(handlerClicked(userName)),
});

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(GithubCompare)
);
