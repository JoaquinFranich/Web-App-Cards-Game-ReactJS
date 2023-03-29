import { useEffect, useState, useCallback } from "react";

const MIN_PAGE = 1;
const MAX_PAGE = 42;
const API = `https://rickandmortyapi.com/api/character/?page=`;

export function useCharacters() {
  const [page, setPages] = useState(1);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const next = useCallback(() => setPages((pages) => ++pages), []);
  const prev = useCallback(() => setPages((pages) => --pages), []);

  useEffect(() => {
    setIsLoading(true);

    if (page < MIN_PAGE) setPages(1);
    if (page > MAX_PAGE) setPages(42);

    const URL = API + page.toString();

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCards(data.results))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [page]);

  return { cards, isLoading, next, prev };
}
