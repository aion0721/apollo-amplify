import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

export default function LetterAvatars() {
  const classes = useStyles();

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
          <ListItemText primary="受験資格" secondary="基本情報技術者試験" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="総勉強時間" secondary="120時間" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="使用した参考書・教材"
            secondary="猿でもわかる！"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="点数"
            secondary="午前1:xx点、午前2:xx点、午後1:xx点、午後2:xx点"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="合格記" secondary="めっちゃ簡単だった！" />
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
    </div>
  );
}
