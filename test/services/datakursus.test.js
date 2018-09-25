const assert = require('assert');
const app = require('../../src/app');

describe('\'datakursus\' service', () => {
  it('registered the service', () => {
    const service = app.service('datakursus');

    assert.ok(service, 'Registered the service');
  });
});
