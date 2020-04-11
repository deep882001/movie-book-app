module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
  snapshotSerializers: ['jest-emotion'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
  }
}
