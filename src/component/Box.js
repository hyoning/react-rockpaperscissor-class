import React, { Component } from "react";

export default class Box extends Component {
  constructor(){
    super();
    this.result = "";
  }
  getResult = () =>{
    if (
      this.props.title === "Computer" &&
      this.props.result !== "Tie" &&
      this.props.result !== ""
    ) { 
      this.result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
      this.result = this.props.result;
    }
  }
  render(){
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <div className="item-name">{this.props.item && this.props.item.name}</div>
        <img className="item-img" src={this.props.item && this.props.item.img} alt=""/>
        <div className={`item-result item-${this.result}`}>{this.result}</div>
      </div>
    );
  }
};
