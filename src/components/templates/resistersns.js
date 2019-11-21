import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "./../../graphql/mutations";

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

async function sampleMutation(username, title, contents) {
  const inputData = {
    snsParentsId: "-",
    snsTitle: title,
    snsContents: contents,
    snsAuthor: username
  };

  await console.log(inputData);
  const newTodo = await API.graphql(
    graphqlOperation(mutations.createSns, { input: inputData })
  );
  await console.log(newTodo);
}

export default function LetterAvatars() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

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
        value={title}
        onChange={event => {
          setTitle(event.target.value);
        }}
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
        value={contents}
        onChange={event => {
          setContents(event.target.value);
        }}
      />
      <br></br>
      <ListItem button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
          onClick={() => {
            sampleMutation(Auth.user.storage.name, title, contents);
            alert("登録しました!!");
            history.push("./snsOverview");
          }}
        >
          スレッドを投稿する
        </Button>
      </ListItem>
    </div>
  );
}
