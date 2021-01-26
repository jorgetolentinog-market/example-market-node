import AWS from "aws-sdk";

let options = {};

if (process.env.IS_OFFLINE) {
  options = {
    endpoint: "http://localhost:8000",
    region: "localhost",
  };
}

export const DynamoDBClient = new AWS.DynamoDB.DocumentClient(options);
