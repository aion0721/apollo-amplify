import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";
import Amplify, { Auth, graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import * as queries from "../../graphql/queries";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function ListView({ targets }) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const history = useHistory();
  return (
    <div>
      {(() => {
        if (targets.length === 0) {
          return (
            <h1 onClick={() => history.push("/targetRegistryNew")}>
              まだ何も登録されていません。登録してみましょう。
            </h1>
          );
        } else {
          return targets.map(target => (
            <div>
              {console.log(target)}
              <Grid container justify="center" alignItems="center">
                <Avatar className={classes.purpleAvatar}>CM</Avatar>
              </Grid>
              <List className={classes.root}>
                <ListItem>
                  <ListItemText primary="ユーザー名" secondary={target.name} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="所属部署"
                    secondary={target.division}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="担当エリア"
                    secondary={target.myArea}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="興味や関心のある分野、技術1"
                    secondary={target.interestArea1}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="興味や関心のある分野、技術2"
                    secondary={target.interestArea2}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="興味や関心のある分野、技術3"
                    secondary={target.interestArea3}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="コメント（プロフィールや経歴など）"
                    secondary={target.comments}
                  />
                </ListItem>
                <Divider />
              </List>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes2.margin}
                onClick={() => {
                  history.push("/targetRegistryMod/" + target.id);
                }}
              >
                修正する
              </Button>
            </div>
          ));
        }
      })()}
    </div>
  );
}

export default function LetterAvatars() {
  return (
    <Connect
      query={graphqlOperation(queries.listUserinformations, {
        filter: {
          userid: { eq: Auth.user.username }
        }
      })}
    >
      {({ data: { listUserinformations }, loading, errors }) => {
        console.log("err", errors);
        console.log("data", { listUserinformations });
        console.log("loading", loading);
        errors = false;
        if (errors) return <h3>Error</h3>;
        if (loading || !listUserinformations) return <CircularProgress />;
        return (
          <div>
            {console.log("alert")}
            <ListView targets={listUserinformations.items} />
          </div>
        );
      }}
    </Connect>
  );
}
