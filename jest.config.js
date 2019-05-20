module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json', 'node'],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy"
  }
}
