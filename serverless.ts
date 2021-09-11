import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
  service: {
    name: 'api-construtoraspfb'
  },
  frameworkVersion: '2',
  custom: {
    region: '${opt:region, self:provider.region}',
    stage: '${env:${opt:stage, self:provider.stage}}',
    // webpack: {
    //   webpackConfig: './webpack.config.js',
    //   includeModules: true
    // }
    ['serverless-offline']: {
      httpPort: 3000,
      useChildProcesses: true,
      babelOptions: {
        presets: ['env']
      }
    },
    dotenv: {
      path: './config'
    }
  },
  plugins: [
    'serverless-bundle',
    'serverless-offline',
    'serverless-dotenv-plugin'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: '${opt:stage, "local"}',
    region: 'eu-west-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    //'${file(./config/env.${self:provider.stage}.json)}',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      REGION: '${self:custom.region}',
      STAGE: '${self:custom.stage}'
    },
    lambdaHashingVersion: '20201221'
  },
  package: { individually: true },
  // import the function via paths
  functions: { hello }
};

module.exports = serverlessConfiguration;
