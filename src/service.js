// metodo para llamar al API

export const getApi = async () => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character`
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error("No se puede acceder al API.");
  }
};
