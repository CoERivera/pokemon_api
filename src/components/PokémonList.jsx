
import React from 'react'

function PokémonList({allPokémon}) {
    return (
        allPokémon ? allPokémon.map((onePokémon,index) => <li key={index}>{onePokémon}</li>): ''
    )
}

export default PokémonList;