import { useEffect, useState, useCallback } from "react";

const MIN_PAGES = 1;
const MAX_PAGES = 42;

export function useCharacters() {
  const [pages, setPages] = useState(1);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = useCallback(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?pages=` + pages.toString()
    )
      .then((response) => response.json())
      .then((data) => setCards(data.results))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [pages]);

  const next = useCallback(() => setPages((pages) => ++pages), []);
  const prev = useCallback(() => setPages((pages) => --pages), []);

  useEffect(() => {
    if (pages < MIN_PAGES) setPages(1);
    if (pages > MAX_PAGES) setPages(42);

    fetchCharacters();
  }, [fetchCharacters, pages]);

  return { cards, isLoading, next, prev };
}
