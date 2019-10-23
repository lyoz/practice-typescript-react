module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          }
        ],
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    open: false,
  }
}
