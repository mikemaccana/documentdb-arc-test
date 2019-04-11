const MongoClient = require('mongodb').MongoClient

exports.handler = async function http(req) {
  console.log(`Got incoming request!`)

  // The following line, if uncommented, will stop even the console.log above from working
  // Instead the entire HTTP request will time out
  await MongoClient.connect('REDACTED')

  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: '<h1>Hello world!</h1>'
  }
}
