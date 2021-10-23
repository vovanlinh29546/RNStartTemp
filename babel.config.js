module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": [
          "./"
        ],
        "alias": {
          "@src": "./src",
          "@res": "./src/res",
        }
      }
    ],
    'react-native-reanimated/plugin',
  ],
};
