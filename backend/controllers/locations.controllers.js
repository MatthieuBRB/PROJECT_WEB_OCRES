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

function findByName(req, res) {
    const nameParam = req.params.name;
    return Location.find({ name: nameParam })
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

function saveOne(req, res) {
    const newLocation = new Location(req.body);

    return newLocation
        .save()
        .then((result) => {
            res
                .status(201)
                .json({ message: `user ${result.id} created`, content: result })
        })
        .catch((err) => {
            if (err.errors && Object.keys(err.errors).length > 0 && err.name === 'ValidationError') {
                res.status(422).json({ message: err.message })
            } else {
                res.status(500).json(err)
            }
        })
}

function updateByName(req, res) {
    const nameParam = req.params.name;

    return Location.updateOne({ name: nameParam }, req.body)
        .then((result) => {
            if (result) {
                res.json({ message: `${result.modifiedCount} updated` })
            } else {
                res.status(404).json({ message: `Location not found` })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

function deleteByName(req, res) {
    const nameParam = req.params.name;

    return Location.deleteOne({ name: nameParam })
        .then((result) => {
            if (result) {
                res.json({ message: `${result.deletedCount} deleted` })
            } else {
                res.status(404).json({ message: `Location not found` })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = { saveOne, findAll, findByName, updateByName, deleteByName }