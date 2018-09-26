const assert = require('assert');
const app = require('../../src/app');

describe('\'jadwalkursus\' service', () => {
  it('registered the service', () => {
    const service = app.service('jadwalkursus');

    assert.ok(service, 'Registered the service');
  });
});
