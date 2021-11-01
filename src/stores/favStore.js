import { writable } from 'svelte/store';

export const favPokemon = writable([]);

export function fetchLocalFavPokemon() {
    const favPokemonSaved = localStorage.getItem('favPokemon');
    const favPokemonParsed = JSON.parse(favPokemonSaved)

    if(favPokemonParsed) {
      favPokemon.set(JSON.parse(favPokemonSaved));
      return
    }

}