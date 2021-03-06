/*
 * Copyright (c) 2020, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/stage-0',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    jest: true
  },
  plugins: ['import', 'jest', 'json', 'node', 'promise', 'standard', 'unicorn'],
  rules: {
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always', { ignoreConstructors: true }],
    'import/prefer-default-export': 'off',
    'mport/no-extraneous-dependencies': 'off',
    'promise/always-return': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'error',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-new-buffer': 'error'
  }
}
