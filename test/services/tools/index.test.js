'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('tools service', function() {
  it('registered the tools service', () => {
    assert.ok(app.service('tools'));
  });
});
