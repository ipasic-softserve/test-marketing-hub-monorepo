import path from 'node:path';
import webpack from 'webpack';

import { buildWebpack } from '@packages/build-config';
import { BuildMode, BuildPaths } from '@packages/build-config';

import packageJson from './package.json';

interface WebpackEnv {
  mode?: BuildMode;
  port?: number;
  EMAIL_CAMPAIGNS_REMOTE_URL?: string;
  DESIGNS_REMOTE_URL?: string;
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
    port: env.port ?? 3001,
    paths,
  });

  const EMAIL_CAMPAIGNS_REMOTE_URL = env.EMAIL_CAMPAIGNS_REMOTE_URL ?? 'http://localhost:3010';
  const DESIGNS_REMOTE_URL = env.DESIGNS_REMOTE_URL ?? 'http://localhost:3011';

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: 'ui_marketing_hub_shell',
      filename: 'remoteEntry.js',
      remotes: {
        email_campaigns: `email_campaigns@${EMAIL_CAMPAIGNS_REMOTE_URL}/remoteEntry.js`,
        designs: `designs@${DESIGNS_REMOTE_URL}/remoteEntry.js`,
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
