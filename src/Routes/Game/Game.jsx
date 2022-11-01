//DEPS
//import { useContext, useState } from "react";
//COMPONENTS
/* import Cards from "../../components/Card/Cards"; */
import Card from "../../components/Card/Card";
//CONTEXT
//import { CardContext } from "../../Context/CardContext";
//import {getApi} from "../../service";
import "./Game.css";

const Game = () => {
    //const {cards, setCards} = useContext(CardContext);
    

    return (
        <>
            <div className="game-container">
                <h1>The Game</h1>
                <Card/>
            </div>
        </>

    )
}

export default Game;