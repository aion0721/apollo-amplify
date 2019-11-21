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
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">受験資格</InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
          >
            <option value="" />
            <option value={10}>基本情報処理技術者試験</option>
            <option value={20}>応用情報処理技術者試験</option>
            <option value={30}>ITストラテジスト試験</option>
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
        />
        <br></br>
        <Button variant="contained" color="primary" className={classes.button}>
          合格記を投稿
        </Button>
      </div>
    </Container>
  );
}
