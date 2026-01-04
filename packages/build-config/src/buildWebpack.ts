import type { Configuration as WebpackConfiguration } from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types';
import { buildLoaders } from './buildLoaders';

export function buildWebpack(options: BuildOptions): WebpackConfiguration {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode ?? 'production',
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
