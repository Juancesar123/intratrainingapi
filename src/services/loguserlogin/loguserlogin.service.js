// Initializes the `loguserlogin` service on path `/loguserlogin`
const createService = require('feathers-mongoose');
const createModel = require('../../models/loguserlogin.model');
const hooks = require('./loguserlogin.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'loguserlogin',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/loguserlogin', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('loguserlogin');

  service.hooks(hooks);
};
