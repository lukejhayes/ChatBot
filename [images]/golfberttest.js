
var https = require("https"),
    https = require("https"),
    aws4 = require("aws4");
var opts = { host: "https://api.golfbert.com", path: "/v1/courses" };
aws4.sign(requestOptions, {
    secretAccessKey: "sLpUpWzRP/WUr07a+aKSU8sejkhCbcSZkY9te0oT",
    accessKeyId: "AKIAY4WGH3URBQH5SY65",
    sessionToken: "fS0Gqy7c3T6M57AVHLlrS7om3nx0BTK51TrwUTHD"
});
https
    .request(opts, function (res) {
        res.pipe(process.stdout);
    })
    .end();
