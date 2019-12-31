const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = env => {
  let mode = env && env.development ? 'development' : 'production';

  return {
    mode: mode,
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.less$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'less-loader'
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
}
