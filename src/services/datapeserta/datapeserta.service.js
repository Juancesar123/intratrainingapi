// Initializes the `datapeserta` service on path `/datapeserta`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datapeserta.model');
const hooks = require('./datapeserta.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');
  const multer = require('multer');
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);        
    }
  })
  const upload = multer({ storage: storage});
  const options = {
    name: 'datapeserta',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/datapeserta',upload.single('gambar'), createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datapeserta');

  service.hooks(hooks);
};
