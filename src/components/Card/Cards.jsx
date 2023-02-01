//DEPS
import { useContext, useEffect, useState } from "react";
import CardFlip from "react-card-flip";
//COMPONENTS
//CONTEXT
import { CardContext } from "../../Context/CardContext";
//import Card from "./Card";
import "./Cards.css";


function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

const Cards = () => {
    const { cards } = useContext(CardContext);
    const block = cards.slice(0,6);
    const pairOfCard = [...block, ...block];
    const cardIndexes = Array.from(Array(pairOfCard.length).keys());
    const shuffledIndexes = shuffleArray(cardIndexes);

    const [isFlipped, setIsFlipped] = useState([]);

    const handleClick = (index) => {
      };

    console.log("Cards.jsx");
    console.log(pairOfCard);


    return(
        <div className="container">
            {
                shuffledIndexes.map(index => {
                    const card = pairOfCard[index];
                    return (
                        <div className="col-3" key={card.id}>
                            <CardFlip isFlipped={isFlipped}>
                            <div key="front">
                                <img src={card.image} className="card-img-top" alt={card.name} onClick={() => handleClick(index)} />
                            </div>
                            <div key="back">
                                <img src={card.image} className="card-img-top" alt={card.name} onClick={() => handleClick(index)} />
                            </div>
                            </CardFlip>
                            {/* <img src={card.image} className="card-img-top" alt={card.name}/> */}
                    </div>
                    )
                })
            }
            
        </div>
    )
}
export default Cards;