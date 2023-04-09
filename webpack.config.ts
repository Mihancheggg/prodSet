//const path = require('path'); //require - скрипт-загрузчик, аналог импорта
//import * as HtmlWebpackPlugin from 'html-webpack-plugin'; //* - импортировать все содержимое пакета
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    module: {
        rules: [ // правила для обработки не-js файлов
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // расширения, которые не нужно указывать при импорте
    },
    output: {
        filename: '[name].[contenthash].js',//динамическое имя, доп индентификатор
        path: path.resolve(__dirname, 'build'),
        clean: true //очищать лишние файлы билда
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ]
}

export default config