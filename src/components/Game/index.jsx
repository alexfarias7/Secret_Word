import styles from "./style.module.css";

import { useState, useRef } from "react";

const Game = ({
  verifyletter,
  PickedWord,
  PickedCategory,
  Letters,
  GuessedLetters,
  Guesses,
  WrongLetters,
  Score,
}) => {
  const [Letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyletter(Letter);

    setLetter("");

    letterInputRef.current.focus();
  };
  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: {Score}</span>
      </p>
      <h1> Advinhe a palavra</h1>
      <h3 className={styles.tip}>
        Dica sobre a palavra: <span>{PickedCategory}</span>
      </h3>
      <p>Você ainda tem {Guesses} tentativas</p>
      <div className={styles.worldContainer}>
        {Letters.map((letter, i) =>
          GuessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={i} className={styles.blankSquare}></span>
          )
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente advinhar uma palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={Letter}
            ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>

        <div className={styles.wrongLettersContainer}>
          <p>letras já utilizadas:</p>
          {WrongLetters.map((letter, i) => (
            <span key={i}>{letter},</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
