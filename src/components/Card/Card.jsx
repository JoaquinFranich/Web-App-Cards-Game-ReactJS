import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import cardBack from "../../assets/portal.png";

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped((isFlipped) => !isFlipped);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div id="front_text">
        <img
          src={card.image}
          className="card-img-top"
          alt={card.name}
          onClick={handleClick}
        />
      </div>

      <div id="back_text">
        <img
          src={cardBack}
          className="card-img-top"
          alt={card.name}
          onClick={handleClick}
        />
      </div>
    </ReactCardFlip>
  );
};

export default Card;
