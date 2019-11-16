import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

//Chart
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

import { PieChart, Pie } from "recharts";

import { API, graphqlOperation } from "aws-amplify";
import { getTodo, listTodos } from "../graphql/queries";

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

const data = [
  { name: "1~3年目", 取得者: 100 },
  { name: "4~5年目", 取得者: 150 },
  { name: "6~8年目", 取得者: 200 },
  { name: "9~10年目", 取得者: 120 },
  { name: "11~年目", 取得者: 50 }
];

const division = [
  { name: "基盤系", 取得者: 200 },
  { name: "業務系", 取得者: 100 },
  { name: "その他", 取得者: 50 }
];

function Top() {
  const classes = useStyles();
  const [data, setData] = useState();
  useEffect(() => {
    const f = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listTodos));
        console.log("GetGraphqlData:", data);
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.contents}>
        <h1>TOP PAGE!!!!!!!!!!</h1>
        <Button onClick={() => alert(API.graphql(graphqlOperation(listTodos)))}>
          aaa
        </Button>
        <h2>取得者年次分布</h2>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="取得者" fill="#8884d8" />
        </BarChart>
        <h2>取得者エリア分布</h2>
        <PieChart width={200} height={400}>
          <Pie
            data={division}
            dataKey="取得者"
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
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
