import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import { useHistory, useParams } from "react-router-dom";

import { Connect } from "aws-amplify-react";
import * as queries from "./../../graphql/queries";

import { graphqlOperation } from "aws-amplify";

import Divider from "@material-ui/core/Divider";

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
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));
const useStyles2 = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "10px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: "opx"
  }
});

function ListView(targets) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.div1}>
        <Card className={classes.card}>
          <h2>{targets.targets.snsTitle}</h2>
          <h3>{targets.targets.snsContents}</h3>
        </Card>
        <Divider />
      </div>
    </Container>
  );
}

function ListViews({ targets }) {
  const classes2 = useStyles2();
  const classes = useStyles();
  return (
    <div>
      {(() => {
        if (targets.length === 0) {
          return (
            <Card className={classes2.card}>
              <CardContent>
                <Typography
                  className={classes2.title}
                  color="textSecondary"
                  gutterBottom
                >
                  まだ何もコメントがついていません
                </Typography>
              </CardContent>
            </Card>
          );
        } else {
          return targets.map(target => (
            <Container className={classes.container}>
              <div className={classes.div1}>
                <Card className={classes.card}>
                  <h2>{target.snsTitle}</h2>
                  <h3>{target.snsContents}</h3>
                </Card>
                <Divider />
              </div>
            </Container>
          ));
        }
      })()}
    </div>
  );
}

export default function ComposedTextField() {
  const { threadsid } = useParams();
  const history = useHistory();
  return (
    <div>
      <Connect
        query={graphqlOperation(queries.getSns, {
          id: threadsid
        })}
      >
        {({ data: { getSns }, loading, errors }) => {
          console.log("err", errors);
          console.log("data", { getSns });
          console.log("loading", loading);
          errors = false;
          if (errors) return <h3>Error</h3>;
          if (loading || !getSns) return <CircularProgress />;
          return (
            <div>
              {console.log("alert")}
              <ListView targets={getSns} />
            </div>
          );
        }}
      </Connect>
      <Connect
        query={graphqlOperation(queries.listSnss, {
          filter: { snsParentsId: { eq: threadsid } }
        })}
      >
        {({ data: { listSnss }, loading, errors }) => {
          console.log("err", errors);
          console.log("data", { listSnss });
          console.log("loading", loading);
          errors = false;
          if (errors) return <h3>Error</h3>;
          if (loading || !listSnss) return <CircularProgress />;
          return (
            <div>
              {console.log("alert")}
              <ListViews targets={listSnss.items} />
            </div>
          );
        }}
      </Connect>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/comentsSns/" + threadsid);
        }}
      >
        コメントを追加
      </Button>
    </div>
  );
}
