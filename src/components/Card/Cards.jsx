//DEPS
import { useContext, useEffect, useState, useRef, useMemo } from "react";
import CardFlip from "react-card-flip";
//COMPONENTS
import image from '../../assets/portal.png';
//CONTEXT
import { CardContext } from "../../Context/CardContext";
//import Card from "./Card";
import "./Cards.css";


function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}


/* const Cards = () => {
  const { cards } = useContext(CardContext);
  const block = cards.slice(0,6);
  const pairOfCard = useMemo(() => {
    return [...block, ...block];
  }, [block])

  const [shuffledIndexes, setShuffledIndexes] = useState([]);

  useEffect(() => {
    const cardIndexes = Array.from(Array(pairOfCard.length).keys());
    setShuffledIndexes(shuffleArray(cardIndexes));
  }, []);

  const [isFlipped, setIsFlipped] = useState(Array(shuffledIndexes.length).fill(false));
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const timeout = useRef(null);

  const evaluate = () => {
    const [first, second] = openCards;
    if (pairOfCard[first].name === pairOfCard[second].name) {
      setClearedCards((prev) => ({ ...prev, [pairOfCard[first].name]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
    setIsFlipped(prevState => {
      const newIsFlipped = [...prevState];
      newIsFlipped[index] = !newIsFlipped[index];
      return newIsFlipped;
    });
  };

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 500);
    }
  }, [openCards]);

  const checkIsFlipped = (index) => {
    return isFlipped[index];
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.name]);
  };

  return (
    <div className="container">
      {shuffledIndexes.map((index) => {
        const card = pairOfCard[index];
        const key = `${card.id}${index}`;

        return (
          <div className="col-3"
          key={key}
      onClick={() => {
        if (!checkIsInactive(card) && !checkIsFlipped(index)) {
          handleCardClick(index);
        }
      }}
      /* key={key} 
    >
      <CardFlip isFlipped={checkIsFlipped(index)} disabled={checkIsInactive(card)} flipDirection="horizontal">
        <div className="card-back">
          <img className="card-image" src={card.image} alt="card-background" />
        </div>
        <div className="card-front" src={image} style={{ backgroundImage: `url(${card.image})` }}></div>
      </CardFlip>
    </div>
  )
    })}
</div>
);
};

export default Cards; */

const Cards = () => {
    const { cards } = useContext(CardContext);
    const block = cards.slice(0,6);
    const pairOfCard = [...block, ...block];

    const [shuffledIndexes, setShuffledIndexes] = useState([]);

    useEffect(() => {
        const cardIndexes = Array.from(Array(pairOfCard.length).keys());
        setShuffledIndexes(shuffleArray(cardIndexes));
        console.log(pairOfCard);
        console.log('CardIndexes: ' + cardIndexes);
    }, []);


    const [isFlipped, setIsFlipped] = useState(Array(shuffledIndexes.length).fill(false));

    const handleClick = (index) => {
        setIsFlipped(prevState => {
        const newIsFlipped = [...prevState];
        newIsFlipped[index] = !newIsFlipped[index];
        return newIsFlipped;
    });
};

    return(
        <div className="container">
            {
                shuffledIndexes.map((index, idx) => {
                    const card = pairOfCard[index];
                    const key = `${card.id}${index}`;

                    console.log('key: ' + key);
                    //console.log('CardIdexes: ' + cardIndexes);
                    console.log(isFlipped);

                    return (
                        <div className="col-3" key={key} index={index}>
                            <CardFlip 
                                isFlipped={!isFlipped[idx]}
                                flipDirection="horizontal"
                                flipKey={idx}>
                            <div key="front">
                                <img src={card.image} className="card-img-top" alt={card.name} onClick={() => handleClick(idx)} />
                            </div>
                            <div key="back">
                                <img src={image} className="card-img-top" alt={card.name} onClick={() => handleClick(idx)} />
                            </div>
                            </CardFlip>
                    </div>
                    )
                })
            }
            
        </div>
    )
}


export default Cards;