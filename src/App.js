import React, { Component } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock : {
    name: "Rock",
    img: "img/rock.png"
  },
  scissors : {
    name: "Scissors",
    img: "img/scissors.png"
  },
  paper : {
    name: "Paper",
    img: "img/paper.png"
  }
};
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      userSelect : choice.scissors,
      computerSelect : choice.scissors,
      result : "",
    }
  }
  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect : choice[userChoice],
      computerSelect : computerChoice,
      result : this.judgement(choice[userChoice], computerChoice)
    });
  } 
  judgement = (user, computer) => {
    if(user.name === computer.name){
      return "Tie"
    } else if(user.name === "Rock"){
      return computer.name === "Scissors" ? "Win" : "Lose";
    } else if(user.name === "Scissors"){
      return computer.name === "Paper" ? "Win" : "Lose";
    } else if(user.name === "Paper"){
      return computer.name === "Rock" ? "Win" : "Lose";
    }
  }
  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어주는 Object.keys
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }
  render(){
    return (
      <div className="wrap">
        <div className="title">가위 바위 보 게임!<p>아래 버튼을 눌러 가위,바위,보 게임을 해봐!</p></div>
        <div className='buttonWrap'>
          <button className="button-scissors" onClick={() => this.play("scissors")}>가위</button>
          <button className="button-rock" onClick={() => this.play("rock")}>바위</button>
          <button className="button-paper"  onClick={() => this.play("paper")}>보</button>
        </div>
        <div className="main">
          <Box title="You" item={this.state.userSelect} result={this.state.result} />
          <Box title="Computer" item={this.state.userSelect} result={this.state.result} />
        </div>
      </div>
    );
  }
}

