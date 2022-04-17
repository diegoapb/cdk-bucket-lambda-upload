#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkBucketLambdaUploadStack } from '../lib/cdk-bucket-lambda-upload-stack';

const envDev = {
    account: process.env.CDK_ACCOUNT,
    region: process.env.CDK_REGION,
}

const app = new cdk.App();
new CdkBucketLambdaUploadStack(app, 'CdkBucketLambdaUploadStack', { env: envDev });