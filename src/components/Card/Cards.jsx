//DEPS
import { useContext, useEffect, useState } from "react";
//COMPONENTS
//CONTEXT
import { CardContext } from "../../Context/CardContext";
//import Card from "./Card";
import "./Cards.css";

const Cards = () => {
    const { cards } = useContext(CardContext);
    const block = cards.slice(0,6);
    const pairOfCard = [...block, ...block];
    //const pairOfCard =cards.slice(0,6);
    //pairOfCard.slice(0, 6);
    console.log("Cards.jsx");
    console.log(pairOfCard);

    /* const {shuffledCards, setShuffledCards} = useState([]);

    useEffect(() => {
        const shuffledCardsList = shuffleArray([...block, ...block]);
        setShuffledCards(shuffledCardsList.map( (card, i) => ({index: i, card, flipped:false}) ));
    }, [setShuffledCards, block]);

    const shuffleArray = a => {
        for (let i = a.length; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
            }

            return a;
        } */

    return(
        <div className="container">
            {
                pairOfCard.map((card) => {
                    return (
                        <div className="col-3" key={card.id}>
                            <img src={card.image} className="card-img-top" alt={card.name}/>
                        {/* <div className="card">  
                            <div className="card-body">
                            <h5 className="card-title">Name: {cards[0].name}</h5>
                            <p className="card-text"><b>Status: {cards[0].status}</b> <br /><b>Species: {cards[0].species}</b></p>
                            </div>
                        </div> */}
                    </div>
                    )
                })
            }

        </div>
    )
}
export default Cards;