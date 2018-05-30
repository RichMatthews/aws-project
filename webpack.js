module.exports = {
  mode: 'production',
  entry: {

  },
  output: {
    path: `${__dirname}/out`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
