import AWS from "aws-sdk";

let options = {};

if (process.env.stage === "local") {
  options = {
    endpoint: "http://localhost:8001",
    region: "localhost",
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

export { client };
