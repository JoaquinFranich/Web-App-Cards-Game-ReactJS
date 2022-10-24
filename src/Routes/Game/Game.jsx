import { useContext, useState } from "react";
import Cards from "../../components/Card/Cards";
import { CardContext } from "../../Context/CardContext";
import {getApi} from "../../service";
import "./Game.css";

const Game = () => {
    const {cards, setCards} = useContext(CardContext);
    

    return (
        <>
            <div className="game-container">
                <h1>The Game</h1>
            </div>
        </>

    )
}

export default Game;