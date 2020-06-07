const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: {
        main : './index.js',
        logic: './js/index.js',
        aboutUs: './js/aboutUs.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js','.html','.png','jpg','.css'],
        alias: {
            '@js' : path.resolve(__dirname, 'src/js'),
            '@html' : path.resolve(__dirname, 'src/html'),
            '@htmlTemplate' : path.resolve(__dirname, 'src/html/template'),
            '@css' : path.resolve(__dirname, 'src/css'),
            '@jsTemplate': path.resolve(__dirname, 'src/js/template')
        }
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: './html/index.html',
        }),
        new HTMLWebpackPlugin({
            filename: "aboutUs.html",
            template: "./html/aboutUs.html",
            chunks: ['aboutUs']
        })
    ]
};