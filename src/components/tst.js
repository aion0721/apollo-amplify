import React, { Component } from "react";
import Amplify, { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";

import * as queries from "../graphql/queries";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

class App extends Component {
  render() {
    const ListView = ({ todos }) => (
      <div>
        <h3>All Todos</h3>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.name} ({todo.id})
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Connect query={graphqlOperation(queries.listTodos)}>
          {({ data: { listTodos }, loading, errors }) => {
            console.log("err", errors);
            console.log("data", { listTodos });
            console.log("loading", loading);
            errors = false;
            if (errors) return <h3>Error</h3>;
            if (loading || !listTodos) return <h3>Loading...</h3>;
            return (
              <div>
                {console.log("alert")}
                <ListView todos={listTodos.items} />
              </div>
            );
          }}
        </Connect>
      </div>
    );
  }
}

export default App;
