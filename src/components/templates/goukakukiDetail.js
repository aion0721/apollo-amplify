import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

import Typography from "@material-ui/core/Typography";

import { useHistory, useParams } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import { Connect } from "aws-amplify-react";
import * as queries from "./../../graphql/queries";
import CircularProgress from "@material-ui/core/CircularProgress";

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

function ListView(targets) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.div1}>
        <h2>タイトル</h2>
        <h3>{targets.targets.goukakukiTitle}</h3>
        <Divider />
        <h2>受験資格</h2>
        <h3>{targets.targets.targetName}</h3>
        <Divider />
        <h2>総勉強時間</h2>
        <h3>{targets.targets.totalTime}時間</h3>
        <Divider />
        <h2>利用参考書</h2>
        <h3>{targets.targets.useText}</h3>
        <Divider />
        <h2>コメント</h2>
        <h3>{targets.targets.comments}</h3>
        <Divider />
      </div>
    </Container>
  );
}

export default function ComposedTextField() {
  const history = useHistory();
  const { goukakukiid } = useParams();

  return (
    <div>
      <Connect
        query={graphqlOperation(queries.getGoukakuki, {
          id: goukakukiid
        })}
      >
        {({ data: { getGoukakuki }, loading, errors }) => {
          console.log("err", errors);
          console.log("data", { getGoukakuki });
          console.log("loading", loading);
          errors = false;
          if (errors) return <h3>Error</h3>;
          if (loading || !getGoukakuki) return <CircularProgress />;
          return (
            <div>
              {console.log("alert")}
              <ListView targets={getGoukakuki} />
            </div>
          );
        }}
      </Connect>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("./../goukakukiichirann")}
      >
        戻る
      </Button>
    </div>
  );
}
