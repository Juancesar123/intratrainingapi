// Initializes the `datakursus` service on path `/datakursus`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datakursus.model');
const hooks = require('./datakursus.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datakursus',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/datakursus', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datakursus');

  service.hooks(hooks);
};
