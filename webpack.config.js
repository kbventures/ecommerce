const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                      loader: "css-loader",
                      options: {
                        importLoaders: 1,
                        modules: true,
                      },
                    },
                  ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:
                './public/index.html',
        }),
    ],
};

