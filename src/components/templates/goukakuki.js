import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  div1: {
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  button: {
    margin: theme.spacing(1),
    width: 200
  },
  input: {
    display: "none"
  }
}));

export default function ComposedTextField() {
  const classes = useStyles();
  const [target, setTarget] = useState();
  const [totalTime, setTotalTime] = useState("");
  const [textBook, setTextBook] = useState("");
  const [score, setScore] = useState("");
  const [comments, setComments] = useState("");

  return (
    <Container className={classes.container}>
      <div className={classes.div1}>
        <Typography variant="h6" gutterBottom>
          受験資格
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper"></InputLabel>
          <NativeSelect
            value={target}
            onChange={event => {
              setTarget(event.target.value);
            }}
            inputProps={{
              name: "age",
              id: "age-native-helper"
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div className={classes.div1}>
        <Typography variant="h6" gutterBottom>
          総勉強時間
        </Typography>
        <TextField
          value={totalTime}
          onChange={event => {
            setTotalTime(event.target.value);
          }}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className={classes.div1}>
        <Typography variant="h6" gutterBottom>
          使用した参考書/教材
        </Typography>
        <TextField
          label=""
          value={textBook}
          onChange={event => setTextBook(event.target.value)}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className={classes.div1}>
        <Typography variant="h6" gutterBottom>
          点数
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows="2"
          value={score}
          onChange={event => setScore(event.target.value)}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className={classes.div1}>
        <br></br>
        <Typography variant="h6" gutterBottom>
          合格記 （具体的な勉強方法、テストの感想、アドバイス等）
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows="7"
          value={comments}
          onChange={event => setComments(event.target.value)}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className={classes.div1}>
        <br></br>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() =>
            console.log({ target, totalTime, textBook, score, comments })
          }
        >
          合格記を投稿
        </Button>
      </div>
    </Container>
  );
}
