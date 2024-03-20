import {useState} from 'react'
import './App.css';
import Box from './component/Box.js'
// 1. 박스 두개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다. 
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다. 
// 5. 3~4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면- 초록, 지면-빨강, 비기면-검정)
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
}
function App() {
  const [userSelect, setUserSelect] = useState(choice.scissors)
  const [computerSelect, setComputerSelect] = useState(choice.scissors)
  const [result, setResult] = useState("")
  const play = (userChoice) =>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  } 
  const judgement = (user, computer) => {
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
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어주는 Object.keys
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }
  return (
    <div className="wrap">
      <div className="title">가위 바위 보 게임!<p>아래 버튼을 눌러 가위,바위,보 게임을 해봐!</p></div>
      <div className='buttonWrap'>
        <button className="button-scissors" onClick={() => play("scissors")}>가위</button>
        <button className="button-rock" onClick={() => play("rock")}>바위</button>
        <button className="button-paper"  onClick={() => play("paper")}>보</button>
      </div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
    </div>
  );
}

export default App;
