import styles from "./style.module.css";

const Game = ({ verifyletter }) => {
  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: 000</span>
      </p>
      <h1> Advinhe a palavra</h1>
      <h3 className={styles.tip}></h3>
      <div className={styles.worldContainer}>
        <span className={styles.letter}>B</span>
        <span className={styles.blankSquare}></span>
      </div>
      <div className={styles.letterContainer}>
        <p>Tente advinhar uma palavra:</p>
        <form>
          <input type="text" name="letter" maxLength={1} required />
          <button>Jogar</button>
        </form>

        <div className={styles.wrongLettersContainer}>
            <p>letras já utilizadas:</p>
            <span>a,</span>
            <span>b</span>
        </div>
      </div>

    </div>
  );
};

export default Game;
