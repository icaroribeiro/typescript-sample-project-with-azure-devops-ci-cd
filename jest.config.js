/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^/opt/nodejs/(.*)": "./src/layers/(.*)",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
