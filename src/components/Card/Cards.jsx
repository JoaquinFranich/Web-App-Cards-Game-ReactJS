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

/*     const handleClick = (index) => {
        setIsFlipped([
            ...isFlipped.slice(0, index),
            !isFlipped[index],
            ...isFlipped.slice(index + 1)
        ]);
      }; */

/*       const [flippedCards, setFlippedCards] = useState({});

      const handleClick = (index) => {
        setFlippedCards((prevState) => ({ ...prevState, [index]: true }));
      }; */

      const [clickedCards, setClickedCards] = useState([]);

      const handleClick = (index) => {
          if (!clickedCards.includes(index)) {
              setIsFlipped([...isFlipped, index]);
              setClickedCards([...clickedCards, index]);
          }
      };

    console.log("Cards.jsx");
    console.log(pairOfCard);


    return(
        <div className="container">
            {
                shuffledIndexes.map(index => {
                    const card = pairOfCard[index];
                    return (
                        <div className="col-3" key={card.id} index={index}>
{/*                             <CardFlip isFlipped={clickedCards[index] || false}>
                            <div key="front">
                                <img src={card.image} className="card-img-top" alt={card.name} onClick={alert(card.index)} />
                            </div>
                            <div key="back">
                                <img src={card.image} className="card-img-top" alt={card.name} onClick={() => handleClick(index)} />
                            </div>
                            </CardFlip> */}
                            <img src={card.image} className="card-img-top" alt={card.name} onClick={() => alert(card.status + " " + index)}/>
                    </div>
                    )
                })
            }
            
        </div>
    )
}
export default Cards;