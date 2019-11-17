import React, { useState, useEffect } from "react";

const items = [["a", "b"], "tst1", "tst2h"];

function Card(props) {
  const [data, setData] = useState();
  useEffect(() => {
    setData(props);
  }, [props]);

  //  const propsItems = Objecrt.keys(props.map(item => <div>{item}</div>);
  console.log(props);
  return (
    <div>
      <p>TestCard</p>
    </div>
  );
}

export default Card;
