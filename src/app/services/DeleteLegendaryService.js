const ListLegendariesService = require('./ListLegendariesService')

const DeleteLegendaryService = {
    delete: (id) => {
        const pokemons = ListLegendariesService.listLegendariesService()
        const pokemonIndice = pokemons.findIndex(pokemon => pokemon.id === Number(id))

        if (pokemonIndice === -1) {
            return {erro: "pokémon não encontrado"}
        }

        pokemons.splice(pokemonIndice, 1)

        return pokemons
    }
}

module.exports = DeleteLegendaryService