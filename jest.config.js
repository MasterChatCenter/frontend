module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next)[/\\\\]',
    '<rootDir>/__tests__/utils',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__mocks__/fileMock.js',
    '^@/atoms$': '<rootDir>/src/components/atoms',
    '^@/molecules$': '<rootDir>/src/components/molecules',
    '^root/config$': '<rootDir>/src/config',
    '^root/actions$': '<rootDir>/src/actions',
    '^root/services$': '<rootDir>/src/services',
  },
};
