'use strict'

module.exports = {
  'env': { 'jasmine': true },
  'plugins': [ 'jasmine' ],
  'rules': {
    'max-statements': 'off',
    'jasmine/named-spy': 'error',
    'jasmine/no-focused-tests': 'error',
    'jasmine/no-disabled-tests': 'error',
    'jasmine/no-suite-dupes': [ 'error', 'branch' ],
    'jasmine/no-spec-dupes': [ 'error', 'branch' ],
    'jasmine/missing-expect': 'error',
    'jasmine/no-suite-callback-args': 'error',
    'jasmine/valid-expect': 'error',
    'jasmine/no-assign-spyon': 'error'
  }
}
