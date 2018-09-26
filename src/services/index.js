const users = require('./users/users.service.js');
const datakursus = require('./datakursus/datakursus.service.js');
const loguserlogin = require('./loguserlogin/loguserlogin.service.js');
const datapengajar = require('./datapengajar/datapengajar.service.js');
const datapeserta = require('./datapeserta/datapeserta.service.js');
const jadwalkursus = require('./jadwalkursus/jadwalkursus.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(datakursus);
  app.configure(loguserlogin);
  app.configure(datapengajar);
  app.configure(datapeserta);
  app.configure(jadwalkursus);
};
