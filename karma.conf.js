module.exports = function (config) {
    config.set(
        {
            basePath: './',
            frameworks: ['jasmine', 'sinon'],
            browsers: ['PhantomJS'],
            reporters: ['spec', 'coverage', 'junit'],
            colors: true,

            logLevel: config.LOG_WARN,

            files: [
                {
                    pattern: './src/js/tests/**/*.spec.js',
                    watched: true
                }
            ],

            preprocessors: {
                './src/**/*.js': ['babel'],
                './src/js/tests/**/*js': ['webpack', 'babel']
            },

            eslint: {
                stopOnError: false,
                stopOnWarning: true,
                showWarnings: true,
                engine: {
                    configFile: '.eslintrc'
                }
            },
            //
            babelPreprocessor: {
                options: {
                    presets: ['es2015'],
                    // plugins: ['transform-es2015-modules-umd'],
                    sourceMap: 'inline'
                }
            //     filename: function (file) {
            //         return file.originalPath.replace(/\.js$/, '.es5.js');
            //     },
            //     sourceFileName: function (file) {
            //         return file.originalPath;
            //     }
            },

            webpack: require('./webpack.test.config.js'),

            // webpackMiddleware : {
                // noInfo : true
            // },

            plugins: [
                // 'babel',
                // 'babel-core',
                'karma-babel-preprocessor',
                'karma-chai',
                'karma-coverage',
                'karma-eslint',
                'karma-jquery',
                'karma-junit-reporter',
                'karma-mocha',
                'karma-mocha-reporter',
                'karma-notify-reporter',
                'karma-nyan-reporter',
                'karma-phantomjs-launcher',
                'karma-phantomjs-shim',
                'karma-sinon',
                'karma-sinon-chai',
                'karma-sourcemap-loader',
                'karma-spec-reporter',
                'karma-webpack',
                'karma-jasmine'
            ],

            port: 9876,
            reportSlowerThan: 500,
            captureTimeout: 20000,
            singleRun: true,
            autoWatch: true,

            // the following configuration increases the timeouts as Jenkins can
            // fail the build waiting for PhantomJS to start.
            //
            // https://github.com/karma-runner/karma/issues/598

            browserDisconnectTimeout : 10000, // default 2000
            browserDisconnectTolerance : 1,   // default 0
            browserNoActivityTimeout : 60000 // default 10000

        });
};
