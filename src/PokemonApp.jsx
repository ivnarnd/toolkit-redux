import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemons";

const PokemonApp = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        //dispatch thunks to load pokemons
        dispatch(getPokemons());
    },[]);
    const {pokemons, isLoading, page} = useSelector(state=>state.pokemons);
    return(
        <>
        <h1>Pokemon App</h1>
        <p>cargando :  {isLoading?"Verdadero":"Falso"}</p>
        <hr />
        <ul>
            {pokemons.map(pokemon=>(
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
        <button onClick={()=>{
            dispatch(getPokemons(page));
        }} disabled={isLoading}>
            Next

        </button>
        </>
    )
};
export default PokemonApp;