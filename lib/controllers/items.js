const { Router } = require('express');
const Item = require('../models/Item');
const authenticate = require('../middleware/authenticate');

// module.exports = Router().get('/', authenticate, async (req, res, next) => {
//   try {
//     const item = await Item.insert({
//       description: req.body.description,
//       qty: req.body.qty,
//       user_id: req.user.id,
//       boughL: req.body.bought,
//     });
//     res.json(item);
//   } catch (e) {
//     next(e);
//   }
// });
module.exports = Router().post('/', authenticate, async (req, res, next) => {
  try {
    const newItem = await Item.insert({
      description: req.body.description,
      qty: req.body.qty,
      user_id: req.user.id,
    });
    res.json(newItem);
  } catch (e) {
    next(e);
  }
});

// TO DO - implement items CRUD
