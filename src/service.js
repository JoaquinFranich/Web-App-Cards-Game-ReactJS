// metodo para llamar al API

export const getApi = async (id, name, image) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?id=${id}&name=${name}&image=${image}`
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error("No se puede acceder al API.");
  }
};
