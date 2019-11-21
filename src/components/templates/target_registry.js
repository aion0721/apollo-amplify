import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';

function Home() {
  const history = useHistory();
  return (
    <div>
      <Button color="primary" onClick={() => history.push("./profile")}>
        Goto profile
      </Button>
      <br></br>
      <Button color="primary" onClick={() => history.push("./target_registry")}>
        Goto Target Registry
      </Button>
    </div>
  );
}

export default Home;
