import React from "react";
import Button from "@material-ui/core/Button";

import { useParams } from "react-router-dom";

//Chart
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import Amplify, { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import * as queries from "../../graphql/queries";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

const division = [
  { name: "実施済", パーセント: 75, 色: "#2250A2" },
  { name: "残り", パーセント: 25, 色: "#da50a2" }
];

const COLORS = ["#2250A2", "#da50a2"];

function ListView({ targets }) {
  var tod = new Date();
  var tard = new Date(targets.goalTestDate);
  var diffTime = tard.getTime() - tod.getTime();
  var diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div>
      {console.log(targets)}
      <h1>{targets.goalName}</h1>
      現在の進捗率は （実施時間集計/目標勉強時間）%
      <PieChart width={400} height={400}>
        <Pie
          data={division}
          nameKey="name"
          dataKey="パーセント"
          cx={200}
          cy={200}
          outerRadius={80}
          label
          fill="#da50a2"
          startAngle={90}
          endAngle={-270}
        >
          {division.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      試験日まであと{diffDay.toString()}日<br></br>
      試験日：{tard.toISOString().substring(0, 10)}
      <br></br>
      <Button variant="contained" color="primary">
        実績を登録する
      </Button>
    </div>
  );
}

function App() {
  const { targetid } = useParams();
  return (
    <div className="App">
      <center>
        <Connect
          query={graphqlOperation(queries.getGoalinformation, { id: targetid })}
        >
          {({ data: { getGoalinformation }, loading, errors }) => {
            console.log("err", errors);
            console.log("data", { getGoalinformation });
            console.log("loading", loading);
            errors = false;
            if (errors) return <h3>Error</h3>;
            if (loading || !getGoalinformation) return <h3>Loading...</h3>;
            return (
              <div>
                <ListView targets={getGoalinformation} />
              </div>
            );
          }}
        </Connect>
      </center>
    </div>
  );
}

export default App;
