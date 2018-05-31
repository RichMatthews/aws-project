exports.myLambda = function(event, context, callback){
  var params = {
    TableName: 'CustomerTable',
    Item: {
      'CUSTOMER_ID': {S: event.id},
      'CUSTOMER_NAME': {S: event.name},
      'CUSTOMER_EMAIL': {S: event.email},
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
