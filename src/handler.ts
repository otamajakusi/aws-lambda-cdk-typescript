export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  console.log("Event: ", JSON.stringify(event, null, 2));
  return {
    statusCode: 200,
    body: "ok",
  };
};
