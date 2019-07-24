

var v4 = require('aws-signature-v4');
var url = v4.createPresignedS3URL('logs/my-file.txt');
// url => "https://examplebucket.s3.amazonaws.com/logs/my-file.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOSFODNN7EXAMPLE%2F20130524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20130524T000000Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=aeeed9bbccd4d02ee5c0109b86d86835f995330da4c265957d157751f604d404"

var v4 = require('aws-signature-v4');
var url = v4.createPresignedS3URL(req.query.name, {
    region: 'eu-central-1', // using frankfurt which requires V4 at the moment
    expires: 3600, // need to upload within 1 hour
    method: 'PUT',
    headers: {
        'x-amz-acl': 'public-read' // set the uploaded file ACL to public-read
    }
});
