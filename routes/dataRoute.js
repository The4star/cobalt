const express = require('express');
const router = express.Router();

const Item = require('../models/Item');
const Collection = require('../models/Collection');
const Directory = require('../models/Directory')

router.get('/items', async (req, res) => {
    const allItems = await Item.find({})
    res.send(allItems)
})

router.get('/collections', async (req, res) => {
    const allCollections = await Collection.find({}).populate('items')
    res.send(allCollections)
})

router.get('/directories', async (req, res) => {
    const allDirectories = await Directory.find({})
    res.send(allDirectories)
})

module.exports = router;