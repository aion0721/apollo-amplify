import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AlarmIcon from '@material-ui/icons/Alarm';
import DnsIcon from '@material-ui/icons/Dns';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 20,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

const useStyles2 = makeStyles(theme => ({
    root: {
      color: theme.palette.text.primary,
    },
  }));

export default function LetterAvatars() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <div>
    <List className={classes.root}>
      <ListItem>
        <Grid container className={classes2.root}>
        <Grid item xs={1}>
          <DnsIcon />
          </Grid>
        <ListItemText primary="スレッド通知" secondary="ちいたむ さんの新しい投稿がありました" />
        </Grid>
      </ListItem>
      <Divider />
      <ListItem>
        <AlarmIcon />
        <ListItemText primary="進捗通知" secondary="今週の目標達成まであと5時間です！" />
      </ListItem>
      <Divider />
      <ListItem>
        <ImportContactsIcon />
        <ListItemText primary="合格記" secondary="あいおん さんの新しい投稿がありました" />
      </ListItem>
      <Divider />
    </List> 
    </div>
  );
}