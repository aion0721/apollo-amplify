import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "./../../graphql/mutations";

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
  username,
  division,
  myArea,
  int1,
  int2,
  int3,
  comments
) {
  const inputData = {
    userid: userid,
    name: username,
    division: division,
    myArea: myArea,
    interestArea1: int1,
    interestArea2: int2,
    interestArea3: int3,
    comments: comments
  };
  await console.log(inputData);
  const newTodo = await API.graphql(
    graphqlOperation(mutations.createUserinformation, { input: inputData })
  );
  await console.log(newTodo);
}

export default function ComposedTextField() {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [division, setDivision] = useState();
  const [myArea, setMyArea] = useState();
  const [int1, setInt1] = useState();
  const [int2, setInt2] = useState();
  const [int3, setInt3] = useState();
  const [comments, setComments] = useState();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <div className={classes.div1}>
        <TextField
          id="ユーザー名"
          label="ユーザー名"
          style={{ margin: 8 }}
          placeholder="英数字を含んだ4文字以上で入力してください"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => setUsername(event.target.value)}
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">所属部署</InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
            onChange={event => setDivision(event.target.value)}
          >
            <option value="" />
            <option value={"業務基盤"}>業務基盤グループ</option>
            <option value={"分散基盤"}>分散基盤グループ</option>
            <option value={"ホスト基盤"}>ホスト基盤グループ</option>
            <option value={"AML企画"}>AML企画グループ</option>
            <option value={"GS"}>GSグループ</option>
            <option value={"TB"}>TBグループ</option>
            <option value={"市場決済"}>市場決済グループ</option>
            <option value={"決済業務"}>決済業務グループ</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">担当エリア</InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
            onChange={event => setMyArea(event.target.value)}
          >
            <option value="" />
            <option value={"基盤"}>基盤</option>
            <option value={"業務"}>業務</option>
            <option value={"運用"}>運用</option>
          </NativeSelect>
        </FormControl>
        <TextField
          label="興味のある分野1"
          placeholder="java"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => setInt1(event.target.value)}
        />
        <TextField
          label="興味のある分野2"
          placeholder="AI"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => setInt2(event.target.value)}
        />
        <TextField
          label="興味のある分野3"
          placeholder="IoT"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => setInt3(event.target.value)}
        />
      </div>
      <div className={classes.div1}>
        <TextField
          id="コメント"
          label="コメント"
          style={{ margin: 8 }}
          placeholder="プロフィールや経歴などを入力してください"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => setComments(event.target.value)}
        />
        <br></br>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            sampleMutation(
              Auth.user.username,
              username,
              division,
              myArea,
              int1,
              int2,
              int3,
              comments
            );
            alert("登録しました!!");
            history.push("/confirmprofile");
          }}
        >
          プロフィールを登録
        </Button>
      </div>
    </Container>
  );
}
