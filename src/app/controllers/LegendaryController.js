const ListLegendariesService = require('../services/ListLegendariesService')
const CreateLegendaryService = require('../services/CreateLegendaryService')
const UpdateLegendariesService = require('../services/UpdateLegendariesService')

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
    },

    update: (req, res) => {
        const { id } = req.params
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

        const updatedLegendary = UpdateLegendariesService.update(
            Number(id),
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
        return res.json(updatedLegendary)
    }
}

module.exports = controller