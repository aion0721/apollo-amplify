import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleList() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <strong>目標一覧</strong>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button onClick={event => history.push("/sinncyokukannri")}>
          <ListItemText primary="基本情報処理技術者試験" />
        </ListItem>
        <ListItem button onClick={event => history.push("/sinncyokukannri")}>
          <ListItemText primary="基本情報処理技術者試験" />
        </ListItem>
      </List>
    </div>
  );
}
