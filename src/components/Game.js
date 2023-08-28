import { useState, useRef } from "react";
import "./Game.css";

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
    const [ letter, setLetter ] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");

        letterInputRef.current.focus();
    }

  return (
    <div className="game">
        <p className="points">
            <span>Pontuação: {score}</span>
        </p>
        <h1>Advinhe a palavra:</h1>
        <h3 className="tip">
            Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativas(s).</p>
        <div className="wordContainer">
        {letters.map((letters, i) => (
            guessedLetters.includes(letters) ? (
                <span key={i} className="letter">{letters}</span>
            ) : (
                <span key={i} className="blankSquare"></span>
            )
        ))}
        </div>
        <div className="letterContainer">
            <p>Tente advininar uma letra da palavra:</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="letter" 
                    maxLength="1" 
                    required 
                    onChange={(e) => setLetter(e.target.value)} 
                    value={letter.toLocaleUpperCase()} 
                    ref={letterInputRef}
                />
                <button>Jogar!</button>
            </form>
        </div>
        <div className="wrongLettersContainer">
            <p>Letras já utilizadas:</p>
            {[...wrongLetters, ...guessedLetters].map((letter, i) => (
               wrongLetters.includes(letter) ? (
               <span key={i} style={{ color: "red" }}>{letter.toUpperCase()}   </span>
               ) : (
               <span key={i} style={{ color: "#1eff00" }}>{letter.toUpperCase()}   </span>
               )
            ))}
        </div>
    </div>
  )
}

export default Game