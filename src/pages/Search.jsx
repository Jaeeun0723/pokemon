import { createSelector } from "@reduxjs/toolkit"
import { getRegExp } from "korean-regexp"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { selectPokemonById, selectPokemonByRegExp } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Search () {
    const [searchParams] = useSearchParams()
    const params = searchParams.get('pokemon')
    const reg = getRegExp(params)

    const pokemon = useSelector(selectPokemonByRegExp(reg))
    console.log(pokemon)
    return(
    <div>
        {pokemon.map((el) => <Card key={el.id} pokemon={el} />)}
    </div>)
}

