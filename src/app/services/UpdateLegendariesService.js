const ListLegendariesService = require('./ListLegendariesService')

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
        }

        return pokemons
    }
}

module.exports = UpdateLegendariesService