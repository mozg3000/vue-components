module.exports = {
	mode: 'development',
	target: 'web',
	resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
    }
  },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env','@vue/babel-preset-jsx'],
						}
					}
			}
		]
	},
	devServer: {
		
	}
};