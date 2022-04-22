import styles from './style.module.css'

const GameOver = ({retry, score}) => {
    return ( <div>
        <h1>fim de jogo</h1>
        <h2 className={styles.text}>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>reiniciar</button>
    </div> );
}
 
export default GameOver;