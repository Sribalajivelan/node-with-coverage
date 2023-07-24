const express = require('express');
const Item = require("../schema/item");
const itemController = express.Router();

// Routes for CRUD operations
itemController.get('/items', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving items from the database.' });
    }
});

itemController.post('/items', async (req, res) => {
    try {
        const { name, description } = req.body;
        const item = await Item.create({ name, description });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Error creating an item in the database.' });
    }
});

itemController.put('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const [updated] = await Item.update({ name, description }, { where: { id } });
        if (updated === 1) {
            res.json({ message: 'Item updated successfully.' });
        } else {
            res.status(404).json({ error: 'Item not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating an item in the database.' });
    }
});

itemController.delete('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Item.destroy({ where: { id } });
        if (deleted) {
            res.json({ message: 'Item deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Item not found.' });
        }
    } catch (error) {
        console.log("error === ", error);
        res.status(500).json({ error: 'Error deleting an item from the database.' });
    }
});

module.exports = itemController;