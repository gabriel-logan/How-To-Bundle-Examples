const path = require('path');

module.exports = [
    {
        mode: "production",
        entry: "./index.ts",
        output: {
            filename: "cjs/index.cjs",
            path: path.resolve(__dirname, "dist"),
            libraryTarget: "commonjs"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [".ts"]
        }
    },
    {
        mode: "production",
        entry: "./index.ts",
        output: {
            filename: "esm/index.mjs",
            path: path.resolve(__dirname, "dist"),
            libraryTarget: "module"
        },
        experiments: {
            outputModule: true
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [".ts"]
        }
    }
]