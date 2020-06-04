const path = require('path');
console.log('@@test')
module.export = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
             rules: [
         {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
             ]
       }
     ]
   }
}
