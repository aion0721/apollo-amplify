import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

export default function ComposedTextField() {
  const classes = useStyles();

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
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">所属部署</InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
          >
            <option value="" />
            <option value={10}>GCB業務第一部</option>
            <option value={20}>GCB業務第二部</option>
            <option value={30}>GCB業務第三部</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">担当エリア</InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
          >
            <option value="" />
            <option value={10}>基盤</option>
            <option value={20}>業務</option>
            <option value={30}>運用</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">
            興味や関心のある分野、技術1
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
          >
            <option value="" />
            <option value={10}>セキュリティ</option>
            <option value={20}>人口知能</option>
            <option value={30}>IoT</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">
            興味や関心のある分野、技術2
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
          >
            <option value="" />
            <option value={10}>セキュリティ</option>
            <option value={20}>人口知能</option>
            <option value={30}>IoT</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">
            興味や関心のある分野、技術3
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
          >
            <option value="" />
            <option value={10}>セキュリティ</option>
            <option value={20}>人口知能</option>
            <option value={30}>IoT</option>
          </NativeSelect>
        </FormControl>
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
        />
        <br></br>
        <Button variant="contained" color="primary" className={classes.button}>
          プロフィールを更新
        </Button>
      </div>
    </Container>
  );
}
