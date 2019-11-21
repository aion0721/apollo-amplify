import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function LetterAvatars() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar className={classes.purpleAvatar}>CM</Avatar>
      </Grid>
      <List className={classes.root}>
        <ListItem>
          <ListItemText primary="ユーザー名" secondary="chiitamu0312" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="所属部署" secondary="GCB業務第一部" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="担当エリア" secondary="業務" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="興味や関心のある分野、技術1" secondary="Ten" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="興味や関心のある分野、技術2"
            secondary="Twenty"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="興味や関心のある分野、技術3"
            secondary="Thirdry"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="コメント（プロフィールや経歴など）"
            secondary="がんばる。"
          />
        </ListItem>
        <Divider />
      </List>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes2.margin}
      >
        修正する
      </Button>
    </div>
  );
}
