import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2)
  }
}));

function Top() {
  const styles = useStyles();
  const history = useHistory();
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        className={styles.button}
        onClick={() => {
          history.push("./profile");
        }}
      >
        Profile
      </Button>
      <br />
      <Button
        color="primary"
        variant="contained"
        className={styles.button}
        onClick={() => {
          history.push("./targetregistry");
        }}
      >
        targetregistry
      </Button>
      <br />
      <Button
        color="primary"
        variant="contained"
        className={styles.button}
        onClick={() => {
          history.push("./goukakuki");
        }}
      >
        goukakuki
      </Button>
      <br />
      <Button
        color="primary"
        variant="contained"
        className={styles.button}
        onClick={() => {
          history.push("./mokuhyoukannri");
        }}
      >
        mokuhyoukannri
      </Button>
      <br />
      <Button
        color="primary"
        variant="contained"
        className={styles.button}
        onClick={() => {
          history.push("./jissekikannri");
        }}
      >
        jissekikannri
      </Button>
      <br />
      <Button
        color="primary"
        variant="contained"
        className={styles.button}
        onClick={() => {
          history.push("./jissekisyousai");
        }}
      >
        jissekisyousai
      </Button>
    </div>
  );
}

export default Top;
