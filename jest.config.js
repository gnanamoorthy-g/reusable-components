// jest.config.js
module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    extensionsToTreatAsEsm: [".ts", ".tsx"],
};
