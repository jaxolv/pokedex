const ListLegendariesService = require('../services/ListLegendariesService')

const UpdateLegendariesService = {
    update: (
        id,
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense
    ) => {
        const pokemons = ListLegendariesService.listLegendariesService()

        const pokemonIndice = pokemons.findIndex(pokemon => pokemon.id === Number(id))
        
        if (pokemonIndice === -1) {
            return {erro: "pokemon não encontrado"}
        }

        pokemons[pokemonIndice] = {
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense 
        }

        return {
            id,
            ...pokemons[pokemonIndice]
        }
    }
}

module.exports = UpdateLegendariesService