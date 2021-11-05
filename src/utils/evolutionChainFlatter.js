export async function evolutionChainFlatter(evolutionRawData) {
  let evoChain = [];
  let evoData = evolutionRawData;

  do {
    let numberOfEvolutions = evoData['evolves_to'].length;

    evoChain.push({
      species_name: evoData.species.name
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evoChain.push({
          species_name: evoData.evolves_to[i].species.name
        });
      }
    }

    evoData = evoData['evolves_to'][0];
  } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

  const arrayPromises = evoChain.map((item) => {
    return new Promise(async (resolve, reject) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${item.species_name}`
      );
      const data = await res.json();
      const imageUrl = data.sprites.other['official-artwork'].front_default;
      const newItem = { ...item, imageUrl };
      return resolve(newItem);
    });
  });

  const editedEvolutionChain = await Promise.all(arrayPromises);

  return editedEvolutionChain;
}
