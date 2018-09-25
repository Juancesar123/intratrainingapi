const assert = require('assert');
const app = require('../../src/app');

describe('\'loguserlogin\' service', () => {
  it('registered the service', () => {
    const service = app.service('loguserlogin');

    assert.ok(service, 'Registered the service');
  });
});
