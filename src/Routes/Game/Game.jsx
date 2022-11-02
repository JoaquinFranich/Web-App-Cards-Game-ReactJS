//DEPS
//import { useContext, useState } from "react";
//COMPONENTS
/* import Cards from "../../components/Card/Cards"; */
import Cards from "../../components/Card/Cards";
//CONTEXT
//import { CardContext } from "../../Context/CardContext";
import "./Game.css";

const Game = () => {
    //const {cards, setCards} = useContext(CardContext);
    

    return (
        <>
            <div className="game-container">
                <h1>The Game</h1>
                <Cards/>
            </div>
        </>

    )
}

export default Game;