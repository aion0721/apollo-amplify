import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "./../../graphql/mutations";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  div1: {
    width: "100%",
    margin: 10
  },
  formControl: {
    width: "100%",
    margin: 10
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

async function sampleMutation(
  userid,
  goukakukiTitle,
  targetName,
  totalTime,
  useText,
  comments
) {
  const inputData = {
    userid: userid,
    goukakukiTitle: goukakukiTitle,
    targetName: targetName,
    totalTime: totalTime,
    useText: useText,
    comments: comments
  };
  await console.log(inputData);
  const newTodo = await API.graphql(
    graphqlOperation(mutations.createGoukakuki, { input: inputData })
  );
  await console.log(newTodo);
}

export default function ComposedTextField() {
  const classes = useStyles();
  const [targetName, setTargetName] = useState();
  const [totalTime, setTotalTime] = useState();
  const [useText, setUseText] = useState();
  const [comments, setComments] = useState();
  const [goukakukiTitle, setGoukakukiTitle] = useState();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <div className={classes.div1}>
        <TextField
          id="合格記タイトル"
          label="合格記タイトル"
          style={{ margin: 8 }}
          placeholder="タイトルを入力してください。"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => {
            setGoukakukiTitle(event.target.value);
          }}
          value={goukakukiTitle}
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">受験資格</InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
            onChange={event => {
              setTargetName(event.target.value);
            }}
            value={targetName}
          >
            <option value="" />
            <option value={"基本情報技術者試験"}>基本情報処理技術者試験</option>
            <option value={"応用情報技術者試験"}>応用情報処理技術者試験</option>
            <option value={"ITストラテジスト試験"}>ITストラテジスト試験</option>
          </NativeSelect>
        </FormControl>
        <TextField
          id="総勉強時間"
          label="総勉強時間"
          style={{ margin: 8 }}
          placeholder="勉強時間を数字のみで入力してください"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => {
            setTotalTime(event.target.value);
          }}
          value={totalTime}
        />
        <TextField
          id="使用した参考書・教材"
          label="使用した参考書・教材"
          style={{ margin: 8 }}
          placeholder="おすすめの参考書・教材を入力してください"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => {
            setUseText(event.target.value);
          }}
          value={useText}
        />
        <TextField
          id="合格記"
          label="合格記"
          style={{ margin: 8 }}
          placeholder="具体的な勉強方法、テストの感想、アドバイス等を入力してください"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => {
            setComments(event.target.value);
          }}
          value={comments}
        />
        <br></br>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            sampleMutation(
              Auth.user.username,
              goukakukiTitle,
              targetName,
              totalTime,
              useText,
              comments
            );
            alert("登録しました!!");
            history.push("./goukakukiichirann");
          }}
        >
          合格記を投稿
        </Button>
      </div>
    </Container>
  );
}
