import styles from "./style.module.css";

const StartScreen = () => {
  return (
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique para jogar</p>
      <button>Começar</button>
    </div>
  );
};

export default StartScreen;
