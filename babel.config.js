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
          "@modules": "./src/modules",
          "@screens": "./src/screens",
          "@models": "./src/models",
          "@components": "./src/components"

        }
      }
    ],
    'react-native-reanimated/plugin',
  ],
};
