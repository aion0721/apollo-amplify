import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
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

export default function DatePickers() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <div className={classes.div1}>
        <TextField
          id="資格名"
          label="資格名"
          style={{ margin: 8 }}
          fullWidth
          defaultValue="応用情報技術者試験"
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          id="受験日"
          label="受験日"
          style={{ margin: 8 }}
          fullWidth
          defaultValue="2019/01/01"
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          id="点数"
          label="点数"
          style={{ margin: 8 }}
          fullWidth
          defaltValue="午前１：xx点、午前２：xx点、午後１：xx点、午後２：xx点"
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
        　 <br></br>
        <ListItem button onClick={event => history.push("/goukakukiNew")}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
          >
            合格記を書く
          </Button>
        </ListItem>
      </div>
    </Container>
  );
}
