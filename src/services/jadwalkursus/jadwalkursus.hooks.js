const { authenticate } = require('@feathersjs/authentication').hooks;

const jadwalkursus = require('../../hooks/jadwalkursus');
//
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [jadwalkursus()],
    get: [jadwalkursus()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
