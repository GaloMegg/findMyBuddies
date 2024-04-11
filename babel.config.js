module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets/*',
          '@clients': './src/clients/*',
          '@components': './src/components/*',
          '@data-access': './src/data-access/*',
          '@hooks': './src/hooks/*',
          '@models': './src/models/*',
          '@services': './src/service/*',
          '@utils': './src/utils/*',
        },
      },
    ]
  ],
};
