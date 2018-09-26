// Initializes the `jadwalkursus` service on path `/jadwalkursus`
const createService = require('feathers-sequelize');
const createModel = require('../../models/jadwalkursus.model');
const hooks = require('./jadwalkursus.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'jadwalkursus',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/jadwalkursus', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('jadwalkursus');

  service.hooks(hooks);
};
