const LegendaryModel = require('../models/LegendaryModel')

// ListLegendariesByNameService
const ListLegendariesService = {
    listLegendariesService: () => {
        const pokemon = new LegendaryModel(
            1,
            'MewTwo',
            'Descrição',
            'pokemon',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00'
        )

        const pokemon2 = new LegendaryModel(
            2,
            'Pikachu',
            'Descrição',
            'pokemon',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00'
        )

        const pokemon3 = new LegendaryModel(
            3,
            'Mew',
            'Descrição',
            'pokemon',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00'
        )

        return [pokemon, pokemon2, pokemon3]
    },

    listPokemonData: (pokemonName) => {
        const pokemonList = ListLegendariesService.listLegendariesService();
        const pokemon = pokemonList.find(pokemon => pokemon.name === pokemonName)
        return pokemon
    }
}

module.exports = ListLegendariesService