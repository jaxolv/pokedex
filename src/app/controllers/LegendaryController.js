const ListLegendariesService = require('../services/ListLegendariesService')
const CreateLegendaryService = require('../services/CreateLegendaryService')

const controller = {
    index: (req, res) => {
        const listLegendariesService = ListLegendariesService.listLegendariesService()
        res.json(listLegendariesService)
    },

    ListData: (req, res) => {
        const { name } = req.query
        const legendary = ListLegendariesService.listPokemonData(name)
        return res.json(legendary)
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