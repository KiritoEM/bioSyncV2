const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup. ts"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};

module.exports = createJestConfig(config);
