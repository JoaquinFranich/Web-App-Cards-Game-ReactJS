import { createContext, useState, useEffect } from "react";

export const CardContext = createContext({
  cards: [],
  setCards: () => {},
});

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const value = { cards, setCards };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`).then(response => response.json()).then(data =>
      setCards(data.results))
  }, [])
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
