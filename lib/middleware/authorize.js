const Item = require('../models/Item.js');

module.exports = async (req, res, next) => {
  
  const item = await Item.getById(req.params.id);
  try {
    if (
      req.user &&
      (req.user.id === item.user_id || req.user.email === 'admin')
    ) {
      next();
    } else {
      throw new Error('You dont have access to this page yo');
    }
  } catch (err) {
    err.status = 403;
    next(err);
  }
};
