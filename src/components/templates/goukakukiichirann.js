import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

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

function ListView({ goukakukis }) {
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const history = useHistory();

  return (
    <div>
      {goukakukis.map(goukakuki => (
        <Card className={classes2.card}>
          <CardContent>
            <Typography
              className={classes2.title}
              color="textSecondary"
              gutterBottom
            >
              <Link
                className={classes3.link}
                onClick={() =>
                  history.push("./goukakukiDetail/" + goukakuki.id)
                }
              >
                {goukakuki.goukakukiTitle}
              </Link>
              <br></br>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function SimpleTabs() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Connect
        query={graphqlOperation(queries.listGoukakukis, {
          limit: 100
        })}
      >
        {({ data: { listGoukakukis }, loading, errors }) => {
          console.log("err", errors);
          console.log("data", { listGoukakukis });
          console.log("loading", loading);
          errors = false;
          if (errors) return <h3>Error</h3>;
          if (loading || !listGoukakukis) return <h3>Loading...</h3>;
          return (
            <div>
              {console.log("alert")}
              <ListView goukakukis={listGoukakukis.items} />
            </div>
          );
        }}
      </Connect>

      <Divider />
      <Divider />
      <br></br>
      <ListItem button onClick={event => history.push("/goukakukiNew")}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
        >
          合格体験記を投稿する
        </Button>
      </ListItem>
    </div>
  );
}
