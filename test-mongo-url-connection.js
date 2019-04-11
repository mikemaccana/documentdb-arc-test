const MongoClient = require('mongodb').MongoClient

;(async function(request, context) {
    await MongoClient.connect('mongodb://localhost')
    console.log(`I connected successfully!`)    
})();