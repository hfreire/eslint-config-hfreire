/*
 * Copyright (c) 2018, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

module.exports = {
  extends: [
    'standard'
  ],
  env: {
    node: true,
    'jest/globals': true
  },
  plugins: [
    'json',
    'jest',
    'promise',
    'standard',
    'unicorn'
  ],
  rules: {
    'standard/computed-property-even-spacing': ['error', 'always'],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'space-before-function-paren': 'error',
    'promise/always-return': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'error',
    'unicorn/filename-case': [ 'error', { 'case': 'kebabCase' } ],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-new-buffer': 'error'
  },
  globals: {
    describe: true,
    it: true,
    beforeAll: true,
    beforeEach: true,
    afterAll: true,
    afterEach: true
  }
}
