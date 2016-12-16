'use strict';

module.exports = {
  'extends': 'stylelint-config-standard',
  'plugins': [ 'stylelint-scss' ],
  'rules': {
    'color-named': 'never',
    'declaration-block-no-ignored-properties': null,
    'declaration-empty-line-before': 'never',
    'font-family-name-quotes': 'always-where-required',
    'font-weight-notation': 'numeric',
    'length-zero-no-unit': true,
    'max-empty-lines': 2,
    'media-feature-no-missing-punctuation': true,
    'property-no-vendor-prefix': true,
    'rule-nested-empty-line-before': [ 'always', {
      'except': 'first-nested',
      'ignore': 'after-comment'
    }],
    'selector-pseudo-element-colon-notation': 'single',
    'string-quotes': 'double',
    'time-no-imperceptible': true,

    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-no-argumentless-call-parentheses': true,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/selector-no-redundant-nesting-selector': true
  }
};
