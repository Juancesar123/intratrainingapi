const assert = require('assert');
const app = require('../../src/app');

describe('\'datapengajar\' service', () => {
  it('registered the service', () => {
    const service = app.service('datapengajar');

    assert.ok(service, 'Registered the service');
  });
});
