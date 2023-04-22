import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            //'style-loader',//creates style nodes from JS strings
            {
                loader: 'css-loader',//translates css into CommonJS
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },

            'sass-loader'//compiles sass to css
        ],
    }

    return [ // правила для обработки не-js файлов
        typescriptLoader, //Если не используем TS, нужен babel-loader
        fileLoader,
        svgLoader,
        cssLoader
    ]
}