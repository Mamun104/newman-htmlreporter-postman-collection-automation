const newman = require('newman');
newman.run({
  collection: require('./collection/Customer_Collection.json'), //
  environment:require('./collection/customer_Environment.json'), // pointing

  iterationCount: 1,
  reporters: 'htmlextra',
  reporter: {
   htmlextra: {
     export: './Reports/report.html', // If not specified, the file
}
}
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});