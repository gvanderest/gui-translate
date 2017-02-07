module.exports = {
    entry: './src/gui-translate.js',
    output: {
        path: './release',
        filename: 'gui-translate.js',
    },
    module: {
        loaders: [{
            test: /\.js(x)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
