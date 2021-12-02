const Location = require('../models/locations.models.js').Location;

function findAll(req, res) {
    return Location.find()
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result)
            } else {
                res.status(202).json({ message: 'no locations available' })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = { findAll }