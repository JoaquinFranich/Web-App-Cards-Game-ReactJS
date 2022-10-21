import { useContext, useEffect } from "react";
import Cards from "../../components/Card/Cards";
import { CardContext } from "../../Context/CardContext";
import "./Game.css";

const Game = () => {
    const {cards, setCards} = useContext(CardContext);


    return (
        <>
            <div className="game-container">
                <h1>The Game</h1>
                <Cards cards={cards}></Cards>
            </div>
        </>

    )
}

export default Game;