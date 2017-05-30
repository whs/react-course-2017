module.exports = {
	entry: './src/game.js', // ทางเข้าอยู่ที่ src/game.js
	module: {
		rules: [
			{
				test: /\.js$/, // เอาเฉพาะไฟล์ .js
				exclude: /node_modules/, // ยกเว้น ไฟล์ใน node_modules
				loader: 'babel-loader', // ให้ load ด้วย babel
			},
			{
				test: /\.css$/, // เอาเฉพาะไฟล์ .css
				loaders: ['style-loader', 'css-loader?modules'],
			},
		]
	} 
};
