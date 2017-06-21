import path from 'path'

export default {
  entry: [
    './src',
  ],
  output : {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'https://jukenukem.irumble.com',
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/,use: 'babel-loader', exclude: /node_modules/},
    ],
  },
  resolve: {
    extensions :['.js', '.jsx'],
  }


}
