const express = require('express');
const router = express.Router();

// models
const Directory = require('../models/Directory');
const Collection = require('../models/Collection');
const Item = require('../models/Item');

// data to seed
const directoryData = require('../seed/directory.json');
const directoryArray = [...directoryData];
const collectionData = require('../seed/collections.json');
const collectionArray = [...collectionData];
const itemData = require('../seed/items.json');
const itemArray = [...itemData];


router.get('/directory', async (req, res) => {
    try {
        await Directory.deleteMany({}, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("all Directories deleted")     
            };
        });
    
        await Directory.insertMany(directoryArray, (err) => {
            if (err) {
                console.log(err);        
            } else {
                console.log("added directories to the database");        
            };
        });

        res.send("<h1>Database successfully seeded with directories.</h1>")
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/collection', async (req, res) => {
    try {
        await Collection.deleteMany({}, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("all Collections deleted")     
            };
        });
    
        await Collection.insertMany(collectionArray, (err) => {
            if (err) {
                console.log(err);        
            } else {
                console.log("added collections to the database");        
            };
        });

        res.send("<h1>Database successfully seeded with collections.</h1>")
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/item', async (req, res) => {
    try {
        await Item.deleteMany({}, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("all Items deleted")     
            };
        });
    
        await Item.insertMany(itemArray, (err) => {
            if (err) {
                console.log(err);        
            } else {
                console.log("added Items to the database");        
            };
        });

       const allItems = await Item.find({})
        console.log(allItems)
        res.send(allItems)

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router; 