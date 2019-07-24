var https = require("https");
var aws4 = require("aws4");
require("dotenv").config();

var opts = { host: 'api.golfbert.com', path: '/https://api.golfbert.com/v1/courses/4803/holes' }
// var url = v4.createPresignedS3URL('./config/keys');

aws4.sign(opts.headers || {}); // assumes AWS credentials are available in process.env

console.log(opts);

// console.log(url);

https.request(opts, function (res) { res.pipe(process.stdout) }).end();