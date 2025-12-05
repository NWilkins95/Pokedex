module.exports = {
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/data/**',
    '!src/public/**',
    '!src/views/**'
  ],
  testTimeout: 30000
};
