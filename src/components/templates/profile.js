import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";

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

async function sampleMutation(userid, targetName, targetDate, targetTime) {
  const inputData = {
    userid: userid,
    goalName: targetName,
    goalTestDate: targetDate,
    objectiveStudyTime: targetTime
  };

  await console.log(inputData);
  const newTodo = await API.graphql(
    graphqlOperation(mutations.createGoalinformation, { input: inputData })
  );
  console.log(newTodo);
}

export default function DatePickers() {
  const classes = useStyles();
  const [targetName, setTargetName] = useState();
  const [targetDate, setTargetDate] = useState("");
  const [targetTime, setTargetTime] = useState();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <div className={classes.div1}>
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
          id="date"
          label="受験予定日"
          style={{ margin: 8 }}
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => {
            setTargetDate(event.target.value);
          }}
          value={targetDate}
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">目標勉強時間</InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
            onChange={event => {
              setTargetTime(event.target.value);
            }}
            value={targetTime}
          >
            <option value="" />
            <option value={1}>週1時間</option>
            <option value={2}>週2時間</option>
            <option value={3}>週3時間</option>
            <option value={4}>週4時間</option>
            <option value={5}>週5時間</option>
            <option value={6}>週6時間</option>
            <option value={7}>週7時間</option>
            <option value={8}>週8時間</option>
            <option value={9}>週9時間</option>
            <option value={10}>週10時間</option>
          </NativeSelect>
        </FormControl>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            sampleMutation(
              Auth.user.username,
              targetName,
              targetDate,
              targetTime
            );
            alert("登録しました!!");
            history.push("./mokuhyoukannri");
          }}
        >
          目標を追加する
        </Button>
      </div>
    </Container>
  );
}
