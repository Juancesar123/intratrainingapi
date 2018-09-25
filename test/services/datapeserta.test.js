const assert = require('assert');
const app = require('../../src/app');

describe('\'datapeserta\' service', () => {
  it('registered the service', () => {
    const service = app.service('datapeserta');

    assert.ok(service, 'Registered the service');
  });
});
