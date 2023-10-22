// ./jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'mjs', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '.*\\.(vue)$': '@vue/vue3-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(nuxt3|unenv))'],
  setupFiles: ['<rootDir>/test/setup.ts'],
  collectCoverage: false,
  collectCoverageFrom: [
    // '<rootDir>/src/ui/core/components/**/*.vue',
    // '<rootDir>/src/ui/pages/**/*.vue',
    '<rootDir>/src/app/modules/**/*UseCase.ts'
  ]
};
