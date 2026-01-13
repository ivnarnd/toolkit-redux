import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemons";

const PokemonApp = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        //dispatch thunks to load pokemons
        dispatch(getPokemons());
    },[]);
    return(
        <>
        <h1>Pokemon App</h1>
        <hr />
        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
        </>
    )
};
export default PokemonApp;