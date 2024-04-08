module.exports = {
  collectCoverage: false,
  maxConcurrency: 1,
  clearMocks: true,
  preset: 'react-native',
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/src/**/__tests__/*.(spec|test).[jt]s?(x)'],
  testTimeout: 20000,
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/@react-native/polyfills/)'],
}
