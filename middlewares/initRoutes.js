const api = require('../routes/api/api');

const initRoutes = (app) => {
  app.use('/', api);
};

module.exports = initRoutes;
