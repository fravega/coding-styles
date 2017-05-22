'use strict';

module.exports = {
  'extends': 'eslint:recommended',
  'rules': {

    // Possible Errors
    'no-extra-parens': 'off',
    'no-prototype-builtins': 'error',
    'valid-jsdoc': [ 'error', {
      'prefer': { 'return': 'returns' },
      'requireReturn': false
    } ],

    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': [ 'error' ],
    'consistent-return': 'off',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': [ 'error', 'property' ],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [ 'error', {
      'allowShortCircuit': true,
      'allowTernary': true
    } ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'radix': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',

    // Strict
    'strict': [ 'error', 'global' ],

    // Variables
    'init-declarations': 'off',
    'no-catch-shadow': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': 'error',

    // Node.js and CommonJS
    'callback-return': 'error',
    'global-require': 'off',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'off',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'error',

    // Stylistic Issues
    'array-bracket-spacing': [ 'error', 'always' ],
    'block-spacing': 'error',
    'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
    'camelcase': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'error',
    'eol-last': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': [ 'error', '^[$_a-zA-Z]+[a-zA-Z0-9]*$' ],
    'indent': [ 'error', 2, { 'SwitchCase': 2 } ],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'max-depth': 'error',
    'max-len': [ 'error', 120 ],
    'max-lines': [ 'error', {
      'max': 300,
      'skipComments': true,
      'skipBlankLines': true
    } ],
    'max-nested-callbacks': 'error',
    'max-params': [ 'error', 5 ],
    'max-statements': [ 'error', 15 ],
    'max-statements-per-line': 'error',
    'new-cap': [ 'error', { 'properties': false } ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 3 } ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'error',
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [ 'error', { 'multiline': true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': 'off',
    'one-var': [ 'error', { 'uninitialized': 'always' } ],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': [ 'error', 'before' ],
    'padded-blocks': 'off',
    'quote-props': [ 'error', 'as-needed' ],
    'quotes': [ 'error', 'single' ],
    'require-jsdoc': [ 'off', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true
      }
    } ],
    'semi': [ 'error', 'never' ],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', {
      'anonymous': 'always',
      'named': 'never'
    } ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error'
  }
};
