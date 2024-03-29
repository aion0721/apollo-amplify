import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";

import { Connect } from "aws-amplify-react";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%"
  },
  contents: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    width: "100%",
    padding: "100"
  }
}));

const showTodos = () => {
  return async () => {
    try {
      const data = await API.graphql(graphqlOperation(listTodos));
      //console.log("GetGraphqlData:", data);
      //return await data;
      return await data;
    } catch (e) {
      console.log(e);
    }
  };
};

function Top() {
  const classes = useStyles();
  const [todo, setTodo] = useState();
  useEffect(() => {
    const f = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listTodos));
        console.log("GetGraphqlData:", data);
        //const tmp = Object.keys(Object.keys);
        //console.log("tmp", tmp);
        //        console.log(data.listTodos.map(items => <div></div>));
        setTodo(data);
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, []);

  const ListView = ({ todos }) => (
    <div>
      <h3>All Todos</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            ID:{todo.id}
            <br />
            Name:{todo.name}
            <br />
            Author:{todo.author}
            <br />
            Description:{todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className={classes.root}>
      <div className={classes.contents}>
        <h1>TOP PAGE!!!!!!!!!!</h1>
        <button onClick={() => console.log(todo)}>showTodo</button>
        <button onClick={() => console.log(showTodos)}>checkShowTodo</button>
        <button onClick={() => console.log(typeof todo)}>checkShowTodo</button>
        <Connect query={graphqlOperation(listTodos)}>
          {({ data: { listTodos }, loading, errors }) => {
            //if (errors) return <h3>Error</h3>;
            if (loading || !listTodos) return <h3>Loading...</h3>;
            return <ListView todos={listTodos.items} />;
          }}
        </Connect>
        <button onClick={() => console.log(Auth.user.username)}>api</button>
        <h2>取得者年次分布</h2>
        <h2>取得者エリア分布</h2>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
        <p> Contents. </p>
      </div>
    </div>
  );
}
export default Top;
