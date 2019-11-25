import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useHistory, useParams } from "react-router-dom";

import { Connect } from "aws-amplify-react";
import * as queries from "./../../graphql/queries";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

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
  id,
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
    id: id,
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
    graphqlOperation(mutations.updateUserinformation, { input: inputData })
  );
  await console.log(newTodo);
}

function ListView(targets) {
  const classes = useStyles();
  const [username, setUsername] = useState(targets.targets.name);
  const [division, setDivision] = useState(targets.targets.division);
  const [myArea, setMyArea] = useState(targets.targets.myArea);
  const [int1, setInt1] = useState(targets.targets.interestArea1);
  const [int2, setInt2] = useState(targets.targets.interestArea2);
  const [int3, setInt3] = useState(targets.targets.interestArea3);
  const [comments, setComments] = useState(targets.targets.comments);
  const history = useHistory();
  const { profileid } = useParams();
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
          defaultValue={username}
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => setUsername(event.target.value)}
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">所属部署</InputLabel>
          <NativeSelect
            defaultValue={division}
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
            defaultValue={myArea}
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
          defaultValue={int1}
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
          defaultValue={int2}
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
          defaultValue={int3}
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
          defaultValue={comments}
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
              profileid,
              Auth.user.username,
              username,
              division,
              myArea,
              int1,
              int2,
              int3,
              comments
            );
            alert("修正しました!!");
            history.push("/confirmprofile");
          }}
        >
          プロフィールを更新
        </Button>
      </div>
    </Container>
  );
}

export default function ComposedTextField() {
  const { profileid } = useParams();
  return (
    <div>
      <Connect
        query={graphqlOperation(queries.getUserinformation, {
          id: profileid
        })}
      >
        {({ data: { getUserinformation }, loading, errors }) => {
          console.log("err", errors);
          console.log("data", { getUserinformation });
          console.log("loading", loading);
          errors = false;
          if (errors) return <h3>Error</h3>;
          if (loading || !getUserinformation) return <CircularProgress />;
          return (
            <div>
              {console.log("alert")}
              <ListView targets={getUserinformation} />
            </div>
          );
        }}
      </Connect>
    </div>
  );
}
