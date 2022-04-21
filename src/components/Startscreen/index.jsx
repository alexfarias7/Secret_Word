import styles from "./style.module.css";


const StartScreen = ({startGame}) => {
    
  return (
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique para jogar</p>
      <button onClick={startGame}>Começar</button>
    </div>
  );
};

export default StartScreen;
