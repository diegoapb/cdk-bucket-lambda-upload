import { lambda_layer_awscli, Stack, StackProps } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { join } from "path";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkBucketLambdaUploadStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const s3DemoBucket = new Bucket(this, "s3_demo_bucket", {
        });

        //create node lambda to upload file to s3
        const uploadLambda = new NodejsFunction(this, "upload-lambda", {
            entry: join(
                __dirname,
                "..",
                "services",
                "upload-lambda.ts"),
            handler: "handler",
            environment: {
                S3_BUCKET_NAME: s3DemoBucket.bucketName,
            },
        });

        s3DemoBucket.grantReadWrite(uploadLambda);

    }
}
