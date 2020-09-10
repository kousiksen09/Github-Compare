import React from 'react';
import { Card, Avatar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pxToVw, pxToVh } from '../theme';
import { pxToRem } from './../theme';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#273D49BF ',
    width: pxToVw(487),
    height: pxToVh(284),
    marginBottom: '2vh',
    paddingTop: '0',
  },

  cardContent: {
    padding: 0,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  userAvatar: {
    position: 'relative',
    top: '0.5rem',
    left: '0.8rem',
    height: '1.5rem',
    width: '1.5rem',
    borderRadius: '50%',
    fontSize: '1rem',
  },
  profileName: {
    position: 'relative',
    top: '1vh',
    width: '2vw',
    left: '1.2rem',
    fontSize: pxToRem(24),
    color: '#FFFFFF',
  },
  profileId: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-end',
    left: '12vw',
    top: '1vh',
    fontSize: pxToRem(18),
    color: '#FFFFFF',
  },
  followUp: {
    position: 'relative',
    top: '3vh',
    left: '1.2rem',
    color: '#FFFFFF',
  },
  repos: {
    position: 'relative',
    top: '5vh',
    left: '1.2rem',
    color: '#FFFFFF',
  },
  profileUrl: {
    fontSize: '1rem',
    color: '#28B463',
    textDecoration: 'none',
  },
}));

function UserCard(props) {
  const classes = useStyles();
  const { gitData } = props;
  console.log(gitData);
  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.cardHeader}>
          <Avatar
            className={classes.userAvatar}
            src={gitData.avatar_url}
            alt={gitData.login}
          />
          <Typography className={classes.profileName}>
            {gitData.login.toUpperCase()}
          </Typography>
          <Typography className={classes.profileId}>{gitData.id}</Typography>
        </div>
        <div className={classes.followUp}>
          <Grid container spacing={2}>
            <Grid xl={6} sm={6} md={6} lg={6}>
              <Typography style={{ color: '#FFFFFFA6', fontSize: '1rem' }}>
                <b> {gitData.followers}</b> Followers{' '}
                <GroupAddIcon
                  style={{
                    height: '3vh',
                    color: '#FFFFFFA6',
                    width: '3vw',
                  }}
                />
              </Typography>
            </Grid>
            <Grid xl={6} sm={6} md={6} lg={6}>
              <Typography style={{ color: '#FFFFFFA6', fontSize: '1rem' }}>
                <b>{gitData.following}</b> Following{' '}
                <PersonAddIcon
                  style={{
                    height: '3vh',
                    color: '#FFFFFFA6',
                    width: '3vw',
                  }}
                />
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.repos}>
          <Grid container spacing={2}>
            <Grid xl={6} sm={6} md={6} lg={6}>
              <Typography style={{ color: '#FFFFFFA6', fontSize: '1rem' }}>
                Public Gists: {gitData.public_gists}
              </Typography>
            </Grid>
            <Grid xl={6} sm={6} md={6} lg={6}>
              <Typography style={{ color: '#FFFFFFA6', fontSize: '1rem' }}>
                Public Repos: {gitData.public_repos}
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Typography
          style={{
            position: 'relative',
            top: '7vh',
            left: '2rem',
            color: '#FFFFFFA6',
            fontSize: '1rem',
          }}
        >
          Created On: {gitData.created_at}
        </Typography>
        <Typography
          style={{
            position: 'relative',
            top: '8vh',
            left: '2rem',
            color: '#FFFFFFA6',
            fontSize: '1rem',
          }}
        >
          Last Update: {gitData.updated_at}
        </Typography>
        <Typography
          style={{
            position: 'relative',
            top: '10vh',
            left: '1rem',
            color: '#FFFFFFA6',
            fontSize: '1rem',
          }}
        >
          Profile URL:{' '}
          <a className={classes.profileUrl} href={gitData.html_url}>
            {gitData.html_url}
          </a>
        </Typography>
      </Card>
    </div>
  );
}

export default UserCard;
