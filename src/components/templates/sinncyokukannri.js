import React from "react";
import Button from "@material-ui/core/Button";

//Chart
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const division = [
  { name: "実施済", パーセント: 75, 色: "#2250A2" },
  { name: "残り", パーセント: 25, 色: "#da50a2" }
];

const COLORS = ["#2250A2", "#da50a2"];

function App() {
  return (
    <div className="App">
      <center>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        試験日まであと（試験日-本日の日付）日
        <br></br>
        <br></br>
        <Button variant="contained" color="primary">
          実績を登録する
        </Button>
      </center>
    </div>
  );
}

export default App;
