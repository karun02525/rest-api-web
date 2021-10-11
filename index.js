var express = require('express');
var app = express();


app.get('/.well-known/assetlinks.json', function (req, res) {
  res.json(
    [
      {
      "relation": [
      "delegate_permission/common.handle_all_urls"
      ],
      "target": {
      "namespace": "android_app",
      "package_name": "com.firebaseapp.twademo",
      "sha256_cert_fingerprints": [
      "F3:1F:5B:BC:4E:94:FF:58:FC:80:D5:AF:CB:75:26:3D:30:A3:6A:7A:07:CB:89:59:1B:C0:5F:77:A3:B9:D0:6D"
      ]
      }
      }
      ]
  )
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});