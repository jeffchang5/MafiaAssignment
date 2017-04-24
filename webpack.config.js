const path = require('path');
module.exports = {
    
    context: path.resolve("./src"),
    entry: "./server.js",
    output: {
        path: path.resolve("./dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    }
};
