const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    return {
        mode: env.mode,
        entry: {
            main: "./src/index.js",
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
            clean: true
        },
        devServer: {
            port: "8000",
            open: true,
            static: path.resolve(__dirname, "dist")
        },
        module: {
            rules: [
                {
                    test: /\.js$|jsx/i,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: './img/[name][ext]',
                    },
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader'
                },
                {
                    test: /\.scss$/i,
                    use: [
                        MiniCssExtractPlugin.loader, {
                            loader: 'css-loader'
                            ,
                        }, , "sass-loader",
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: './fonts/[name][ext]',
                    },
                },
            ]
        },
        resolve: {
            extensions: [".css", ".jsx", ".scss"],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, "./public/index.html") }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'public/img', to: 'img' },
                    // { from: 'src/styles/fonts', to: 'fonts' }
                ]
            }),
            new MiniCssExtractPlugin({
                filename: "style.css",
                chunkFilename: "[name].css"
            })
        ]
    }
}