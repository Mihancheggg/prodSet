import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options) // правила для обработки не-js файлов
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',//динамическое имя, доп индентификатор
            path: paths.build,
            clean: true //очищать лишние файлы билда
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined, //показывает, в каком файле ошибка
        devServer: isDev ? buildDevServer(options) : undefined
    }
}