'use strict';

module.exports = {
  'plugins': [ 'stylelint-scss' ],
  'rules': {
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/double-slash-comment-empty-line-before':  [ 'always', {
      'except': 'first-nested',
      'ignore': ['between-comments', 'stylelint-commands']
    }],
    'scss/double-slash-comment-whitespace-inside': 'always'
  }
};
