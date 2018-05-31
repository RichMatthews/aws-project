const AWS = require("aws-sdk");
let ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
exports.myLambda = function(event, context, callback){
  console.log('testing that lambda works');
  console.log(event, 'this is the event...');
  var params = {
    TableName: 'garply-CreateDynamoDBTable-GOWCBPMPOFP5',
    Item: {
      'CUSTOMER_ID': {N: '001'},
      'CUSTOMER_NAME': {S: 'RICHARD M'},
    }
  }
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}
