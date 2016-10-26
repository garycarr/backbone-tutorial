let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let dirName = __dirname;  // eslint-disable-line

module.exports = {
    entry: './src/index.js',
    output: {
        path: dirName,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules\/)/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars',
                query: {
                    inlineRequires: '\/images\/',
                    helperDirs: [`${dirName}/src/helpers`]
                }
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/bundle' })
    ]
};
