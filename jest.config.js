module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@expo|expo(nent)?|@expo/vector-icons)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
};