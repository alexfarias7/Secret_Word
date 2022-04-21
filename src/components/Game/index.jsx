import styles from './style.module.css'

const Game = ({verifyletter}) => {
    return ( <div>
        <h1>game</h1>
        <button onClick={verifyletter}>terminar</button>
    </div> );
}
 
export default Game;