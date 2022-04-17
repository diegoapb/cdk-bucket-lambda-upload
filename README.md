# Welcome to your CDK TypeScript project

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk deploy --profile dev CdkBucketLambdaUploadStack`      deploy stack using a custom profile
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

# Bucket S3 Upload File Demo

# Requerimientos

```bash
aws --version
# aws-cli/2.5.6 Python/3.9.11 Darwin/21.4.0 exe/x86_64 prompt/off
cdk --version
# 2.20.0 (build 738ef49)
```

# NPM dependencias

```bash
"aws-cdk": "2.20.0",
"esbuild": "^0.14.36",
"aws-sdk": "^2.1116.0",
"fs": "^0.0.1-security",
"https": "^1.0.0",
```

# Entornos

Variables de Entorno `.env` file:

```bash
S3_BUCKET_NAME=my-cdkbucketname
AWS_PROFILE=my-prfile-name
CDK_REGION=my-region-name
CDK_ACCOUNT=my-id-account
```

## Obteniendo variables de entrono

[AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.htm)

```bash
# ver archivo donde se almacenan las credenciales en local
cat ~/.aws/credentials
# ver archivo donde se configuran los perfiles en local
cat ~/.aws/config
# listar perfiles usando aws cli
aws configure list-profiles
# configurar perfil por defecto
aws configure
# configurar un perfil en especial <<profile-name>>
aws configure --profile <profile-name>
```