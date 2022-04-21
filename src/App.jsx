import "./App.css";

import { useCallback, useEffect, useState } from "react";

import { wordsList } from "./data/word";

import StartScreen from "./components/Startscreen";
import Game from "./components/Game";
import GameOver from "./components/End";



const stage = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [GameStage, setGameStage] = useState(stage[0].name)
  const [Word, setWord] = useState(wordsList)
  
  //*começa o jogo
  const startGame=()=>{
    setGameStage(stage[1].name)
  }

  //* processa a letra do input
  const verifyletter =()=>{
    setGameStage(stage[2].name)
  }

  //* reinicia o jogo
  const retry =()=>{
    setGameStage(stage[0].name)
  }
  return (
    <div className="App">
      {GameStage === 'start' && <StartScreen  startGame={startGame}/>}
      {GameStage === 'game' && <Game verifyletter={verifyletter}/>}
      {GameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
