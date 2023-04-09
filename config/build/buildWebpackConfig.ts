import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders() // правила для обработки не-js файлов
        },
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js',//динамическое имя, доп индентификатор
            path: paths.build,
            clean: true //очищать лишние файлы билда
        },
        plugins: buildPlugins(paths)
    }
}