var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        //load scripts before App.jsx, make use of the script-loader through 'script!'
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './src/App.jsx'
    ],
    externals: {
        //make jquery available globally through the var 'jQuery'
        jquery: 'jQuery'
    },
    plugin: [
        //allows the usage of jquery module through '$' and 'jQuery' without importing the module
        new webpack.ProvidePlugin({
            //tell webpack to watch for '$' and 'jQuery' and replace those with jquery module
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            //Place aliases here
            //Example:
            //NameModule: 'path of own module to include'
            //NOTE: DO NOT USE ./
            applicationStyles: 'src/styles/app.scss'
        },
        extensions:['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: './public/',
            progress: true
        }
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'source-map'
};