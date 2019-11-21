import React, { useEffect } from "react";

function Card(props) {
  useEffect(() => {}, [props]);

  //  const propsItems = Objecrt.keys(props.map(item => <div>{item}</div>);
  console.log(props);
  return (
    <div>
      <p>TestCard</p>
    </div>
  );
}

export default Card;
