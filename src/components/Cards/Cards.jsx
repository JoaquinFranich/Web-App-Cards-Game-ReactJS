import "./Cards.css";

import { useCharacters } from "../../hooks/useCharacters/useCharacters";
import Card from "../Card/Card";
import ForEach from "../ForEach/ForEach";

const Cards = () => {
  const { cards, isLoading } = useCharacters();

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="container">
      <ForEach of={cards}>
        {(card) => (
          <div key={card.id} className="col-3">
            <Card card={card} />
          </div>
        )}
      </ForEach>
    </div>
  );
};

export default Cards;
