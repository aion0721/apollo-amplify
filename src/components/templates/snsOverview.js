import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

import Amplify, { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import * as queries from "../../graphql/queries";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    ></Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
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
    fontSize: 20
  },
  pos: {
    marginBottom: "opx"
  }
});

const useStyles3 = makeStyles(theme => ({
  div1: {
    fontSize: 14
  }
}));

function ListView({ snss }) {
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const history = useHistory();

  return (
    <div>
      {snss.map(sns => (
        <Card className={classes2.card}>
          <CardContent>
            <Typography
              className={classes2.title}
              color="textSecondary"
              gutterBottom
            >
              <Link
                onClick={() => history.push("./threads?" + sns.id)}
                className={classes3.link}
              >
                {sns.snsTitle}
              </Link>
              <br></br>
            </Typography>
          </CardContent>
          <div className={classes3.div1}>
            トピックオーナー：{sns.snsAuthor}
            <br></br>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function SimpleTabs() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Connect
        query={graphqlOperation(queries.listSnss, {
          //  filter: {
          //    userid: { eq: Auth.user.username }
          //  }
        })}
      >
        {({ data: { listSnss }, loading, errors }) => {
          console.log("err", errors);
          console.log("data", { listSnss });
          console.log("loading", loading);
          errors = false;
          if (errors) return <h3>Error</h3>;
          if (loading || !listSnss) return <h3>Loading...</h3>;
          return (
            <div>
              {console.log("alert")}
              <ListView snss={listSnss.items} />
            </div>
          );
        }}
      </Connect>
      <br></br>
      <ListItem button onClick={event => history.push("/resistersns")}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
        >
          新規スレッドを投稿
        </Button>
      </ListItem>
    </div>
  );
}
