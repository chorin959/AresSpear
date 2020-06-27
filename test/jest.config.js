const path = require('path')
module.exports = {
  verbose: true, 
  testURL: "http://localhost/",
  rootDir: path.resolve(__dirname, '../'),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coverageDirectory: "<rootDir>/test/coverage",
  testRegex: "/test/unit/.*\\.spec\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}