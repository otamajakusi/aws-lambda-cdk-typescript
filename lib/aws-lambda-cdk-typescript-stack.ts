import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class AwsLambdaCdkTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new cdk.aws_lambda_nodejs.NodejsFunction(this, "MyFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: "src/handler.ts",
      handler: "handler",
    });
    const url = fn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });
    new cdk.CfnOutput(this, "MyFunctionUrl", {
      value: url.url,
    });
  }
}
