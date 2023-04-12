import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',//creates style nodes from JS strings
            'css-loader',//translates css into CommonJS
            'sass-loader'//compiles sass to css
        ],
    }

    return [ // правила для обработки не-js файлов
        typescriptLoader, //Если не используем TS, нужен babel-loader
        cssLoader
    ]
}