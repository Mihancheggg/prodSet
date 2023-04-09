import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'], // расширения, которые не нужно указывать при импорте
    }
}