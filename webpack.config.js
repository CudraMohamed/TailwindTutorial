module.exports = {
    // other configuration options...
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        }
      ],
      plugins:[
        require('tailwindcss')
      ]
    }
  }