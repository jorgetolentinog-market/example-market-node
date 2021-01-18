import AWS from "aws-sdk";

let options = {};

if (process.env.IS_OFFLINE) {
  options = {
    endpoint: "http://localhost:8000",
    region: "localhost",
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

export { client };
