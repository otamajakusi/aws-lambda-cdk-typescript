# Prerequisites

- aws cli
- aws cdk
  need to be setup

# Setup

## AWS Setup

```bash
cdk bootstrap
```

## Install dependencies

```bash
npm install
```

# Deploy

```bash
cdk deploy
```

# Note

For lamda function deployment, `cdk.aws_lambda_nodejs.NodejsFunction` needs to be used.
`.ts` file can be specified directly for the `entry` property.

# How this directory was created

```bash
cdk init app --language typescript
```
