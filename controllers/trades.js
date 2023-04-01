const Trade = require('../models/trades')
module.exports = {
    create: async function (req, res) {
        const trade = await Trade.create(req.body).catch((err) => {
            if (err.name.indexOf('SequelizeUniqueConstraintError') !== -1) return res.status(404).send({ status: 404, message: 'trade with given id existe' })
            else return res.send(err)
        })
        res.status(201).send(trade)
    },

    getAll: async function (req, res) {
        const trades = await Trade.findAll()
        if (trades === null) {
            console.log('Not found!')
            return res.status(404).send({ status: 404, message: 'trades not found' })
        } else {
            res.json(trades)
        }
    },

    getById: async function (req, res) {
        const trade = await Trade.findOne({ where: { id: req.params.id } })
        if (trade === null) {
            console.log('Not found!')
            return res.status(404).send({ status: 404, message: 'trade with given id not found' })
        } else {
            res.json(trade)
        }
    }
}
