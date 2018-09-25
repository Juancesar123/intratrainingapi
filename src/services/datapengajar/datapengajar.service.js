// Initializes the `datapengajar` service on path `/datapengajar`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datapengajar.model');
const hooks = require('./datapengajar.hooks');

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
    name: 'datapengajar',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/datapengajar', upload.single('gambar'), createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datapengajar');

  service.hooks(hooks);
};
