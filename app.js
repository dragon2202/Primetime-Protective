var express = require('express')
var app = express()

app.use(express.static('app'));

const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
    console.log('Server listening at 5000')
})

//https://stackoverflow.com/questions/28822034/simple-node-js-server-that-sends-htmlcss-as-response
//https://github.com/bradtraversy/node_passport_login/blob/master/app.js
//https://www.scribens.com/