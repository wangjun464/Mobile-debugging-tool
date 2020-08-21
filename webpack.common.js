const iCrushLoaderPlugin = require('icrush-loader-plug');

module.exports = {
    entry: ['./web/entry.js'],
    output: {
        path: __dirname,
        filename: 'web/dist/main.js',
        chunkFilename: 'web/dist/bundle.[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'image2d': require('path').resolve(__dirname, 'web/plug/image2D.js')
        }
    },
    module: {
        rules: [{
            test: /\.iCrush$/,
            loader: ['icrush-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            loader: ['icrush-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "web/dist/[name].[ext]",
                    context: "web/assets",
                    limit: 500000000
                }
            }]
        }]
    },
    plugins: [
        new iCrushLoaderPlugin()
    ]
};
