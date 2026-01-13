import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
export const getPokemons = (page = 0)=>{
    return async (dispatch,getState)=>{
        dispatch(startLoadingPokemons());
        // Simulate API call
        setTimeout(() => {
            const pokemons = Array.from({ length: 10 }, (_, i) => `Pokemon ${page * 10 + i + 1}`);
            dispatch(setPokemons(pokemons));
        }, 1000);
    }
}