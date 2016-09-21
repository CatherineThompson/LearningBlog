module.exports = {
    entry: {
        app: ['babel-polyfill', "./practice.jsx"],
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
               test: /\.jsx$/,
               exclude: /node_modules/,
               loader: 'babel-loader'
             }
        ],
    },
};
