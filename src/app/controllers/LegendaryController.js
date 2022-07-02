const { response } = require('express')
const LegendariesService = require('../services/LegendariesService')
const CreateLegendaryService = require('../services/CreateLegendaryService')

const controller = {
    index: (req, res) => {
        const listLegendariesService = LegendariesService.listLegendariesService()

        res.json(listLegendariesService)
    },

    ListData: (req, res) => {
        const { name } = req.query
        const legendary = LegendariesService.listPokemonData(name)
        return response.json(legendary)
    },
    create: (req, res) => {
        const {
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        } = req.body

        const legendary = CreateLegendaryService.createLegendary(
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        )
        return res.json(legendary)
    }
}

module.exports = controller