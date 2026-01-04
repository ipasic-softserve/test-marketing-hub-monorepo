import path from 'node:path';
import webpack from 'webpack';

import { buildWebpack } from '@packages/build-config';
import { BuildMode, BuildPaths } from '@packages/build-config';

import packageJson from './package.json';

interface WebpackEnv {
  mode?: BuildMode;
  port?: number;
}

export default (env: WebpackEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const config = buildWebpack({
    mode: env.mode ?? 'production',
    port: env.port ?? 3011,
    paths,
  });

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: 'designs',
      filename: 'remoteEntry.js',
      exposes: {
        './Router': './src/router/Router.tsx',
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies['react'],
        },
        'react-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
        'react-router-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-router-dom'],
        },
      },
    })
  );

  return config;
};
