const { Router } = require('express');
const { Items } = require('../models/Item');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const data = await Items.getAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
});
// TO DO - implement items CRUD
