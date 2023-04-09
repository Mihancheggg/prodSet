import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[]{
    return [ // правила для обработки не-js файлов
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}