#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCiAwsPipelineStack } from '../lib/ci-ci-aws-pipeline-stack';

const app = new cdk.App();
new CiCiAwsPipelineStack(app, 'CiCiAwsPipelineStack', {
  env: {
    account: '393747608406',
    region: 'us-east-1'
  }
});

app.synth()