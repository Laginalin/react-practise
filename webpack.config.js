module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        'StopWatch': './stopwatch/StopWatch.jsx'
    },
    output: {
        filename: './dist/[name].js'
    },
    module: {
        rules: [
            // jsx
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // less
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // el
            {
                test: /\.es$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
