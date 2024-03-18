import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "Tie" &&
    props.result !== ""
  ) { 
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <div className="item-name">{props.item && props.item.name}</div>
      <img className="item-img" src={props.item && props.item.img} alt=""/>
      <div className={`item-result item-${result}`}>{result}</div>
    </div>
  );
};

export default Box;