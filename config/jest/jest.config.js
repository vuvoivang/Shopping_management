module.exports = {
  rootDir: '../../',
  testURL: 'http://localhost',
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '**/src/**/*.ts',
    '**/src/**/*.tsx',
    '!**/src/index.tsx',
    '!**/src/index.js',
    '!**/src/vendor/*.js',
    '!**/src/constants/*.js',
    '!**/src/localization/*.js',
    '!**/src/components/App.js',
    '!**/src/common/index.js',
    '!**/src/components/common/index.js',
    '!**/src/transformer/index.js',
    '!**/src/services/index.js',
    '!**/src/helpers/index.js',
    '!**/src/components/pages/demo/*.js',
    '!**/src/mock-data/*.js'
  ],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(ts)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  testMatch: ['**/?(*.)+(spec).js?(x)', '**/?(*.)+(spec).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/mocks/FileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  setupFiles: ['<rootDir>/config/jest/test-setup.js'],
  moduleDirectories: ['node_modules', 'src']
};
