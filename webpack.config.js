const minicss = require("mini-css-extract-plugin")
const path = require("path")
const common = {
    entry : {
        app : "./src/client.tsx"
    },
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        hot : true,
        index : "./dist/index.html"
    },
    output : {
        filename : "./renderer.js"
    },

    externals : {
        react : "React",
        "react-dom" : "ReactDOM"
    },
    target : "web",
    mode: "production",
    // Enable sourcemaps for debugging webpack's output.
    devtool: "none",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".css", "jsx", "scss"]
    },

    

    module: {
        rules: [
            {
                test :  /\.s[ac]ss$/i,
                use : [
                  minicss.loader,
                  "css-loader",
                  "sass-loader"
                ]
              },
            {
                test : /\.css/,
                exclude : /node_modules/,
                use : [
                    {
                        loader : minicss.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    plugins : [
        new minicss({
            filename : "app.css"
        })
    ]

}
module.exports = [
    common
]
