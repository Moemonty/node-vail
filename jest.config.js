module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.+(js|jsx)",
    "**/?(*.)+(spec|test).+(js|jsx)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "\\.ts$"
  ]
};