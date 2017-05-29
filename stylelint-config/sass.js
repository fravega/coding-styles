'use strict';

module.exports = {
  'plugins': [ 'stylelint-scss' ],
  'rules': {
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-no-argumentless-call-parentheses': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/double-slash-comment-empty-line-before': 'always',
    'scss/double-slash-comment-whitespace-inside': 'always'
  }
};
