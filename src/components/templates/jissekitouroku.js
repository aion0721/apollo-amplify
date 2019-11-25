import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  formControl: {
    width: "100%",
    margin: 10
  },
  div1: {
    width: "100%",
    margin: 10
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function ComposedTextField() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.div1}>
        <TextField
          id="受験資格"
          label="受験資格"
          defaultValue="応用情報技術者試験"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          id="date"
          label="受験登録日"
          style={{ margin: 8 }}
          type="date"
          defaultValue="2019-01-01"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">実績勉強時間</InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
          >
            <option value="" />
            <option value={1}>1時間</option>
            <option value={2}>2時間</option>
            <option value={3}>3時間</option>
            <option value={4}>4時間</option>
            <option value={5}>5時間</option>
            <option value={6}>6時間</option>
            <option value={7}>7時間</option>
            <option value={8}>8時間</option>
            <option value={9}>9時間</option>
            <option value={10}>10時間</option>
          </NativeSelect>
        </FormControl>
        <br></br>
        <Button variant="contained" color="primary" className={classes.button}>
          実績を登録する
        </Button>
      </div>
    </Container>
  );
}
