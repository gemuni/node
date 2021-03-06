// Flags: --no-warnings
'use strict';
const common = require('../common');
const assert = require('assert');
const tls = require('tls');

common.expectWarning(
  'DeprecationWarning',
  'tls.createSecurePair() is deprecated. Please use tls.Socket instead.'
);

assert.doesNotThrow(() => tls.createSecurePair());
