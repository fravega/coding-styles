'use strict';

module.exports = {
  'extends': 'stylelint-config-standard',
  'rules': {
    'indentation': 2,
    'color-named': 'never',
    'declaration-block-no-ignored-properties': null,
    'declaration-empty-line-before': 'never',
    'at-rule-empty-line-before': 'never',
    'font-family-name-quotes': 'always-where-required',
    'font-weight-notation': 'numeric',
    'length-zero-no-unit': true,
    'max-empty-lines': 2,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [ 'always', {
      'except': 'first-nested',
      'ignore': 'after-comment'
    }],
    'selector-pseudo-element-colon-notation': 'single',
    'string-quotes': 'double',
    'time-min-milliseconds': 10
  }
};
