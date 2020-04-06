module.exports = {
  moduleNameMapper: {
    'components(.*)$': '<rootDir>/src/components/$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.js'
}
