import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div>
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.purpleAvatar}>JM</Avatar>
    </Grid>
    <List className={classes.root}>
      <ListItem>
        <ListItemText primary="ユーザー名" secondary="mizunonono" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="所属部署" secondary="海外基盤部" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="担当エリア" secondary="基盤" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="興味や関心のある分野、技術1" secondary="Ten" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="興味や関心のある分野、技術2" secondary="Twenty" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="興味や関心のある分野、技術3" secondary="Thirdry" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="コメント（プロフィールや経歴など）" 
        secondary="ほむほむ" />
      </ListItem>
      <Divider />
    </List>
    </div>
  );
}