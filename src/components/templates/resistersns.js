import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

export default function LetterAvatars() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar className={classes.purpleAvatar}>CM</Avatar>
      </Grid>
      <TextField
        id="outlined-multiline-static"
        label="スレッドタイトル"
        multiline
        rows="1"
        width="4000"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-multiline-static"
        label="本文"
        multiline
        rows="5"
        width="2500"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <br></br>
      <ListItem button onClick={event => history.push("/snsOverview")}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
        >
          スレッドを投稿する
        </Button>
      </ListItem>
    </div>
  );
}
