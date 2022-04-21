import styles from './style.module.css'

const GameOver = ({retry}) => {
    return ( <div>
        <h1>fim de jogo</h1>
        <button onClick={retry}>reiniciar</button>
    </div> );
}
 
export default GameOver;