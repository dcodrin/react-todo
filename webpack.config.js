var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

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
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
            }
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
            firebaseConfig: 'src/firebase/index.js',
            applicationStyles: 'src/styles/app.scss',
            routes: 'src/routes/routes.jsx',
            App: 'src/App.jsx',
            actions: 'src/actions/actions.jsx',
            reducers: 'src/reducers/reducers.jsx',
            configureStore: 'src/store/configureStore.jsx'
        },
        //import modules without specifying aliases (must include node_modules)
        modulesDirectories: ['node_modules', './src/components', './src/api'],
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
    devtool:  process.env.NODE_ENV === 'production' ? undefined : 'source-map'
};