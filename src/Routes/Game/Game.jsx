//DEPS
//import { useContext, useState } from "react";
//COMPONENTS
/* import Cards from "../../components/Card/Cards"; */
import { useContext } from "react";
import Cards from "../../components/Card/Cards";
//CONTEXT
import { CardContext } from "../../Context/CardContext";
import "./Game.css";

const Game = () => {
    //const {cards, setCards} = useContext(CardContext);
    /* const {shuffleCards, setShuffleCards} = useContext(CardContext);

    const shuffleArray = a => {
        for (let i = a.length; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
            }

            return a;
        } */

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