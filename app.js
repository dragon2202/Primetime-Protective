var express = require('express')
var app = express()
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var bodyParser = require('body-parser');

app.use(express.static('app'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

app.post('/email', function (req, res) {
  console.log(req.body);
  var name = req.body.name;
  var address = req.body.email;
  var subject = req.body.subject;
  var mailBody = "Email: " + address + "\nName: " + name + "\nSubject: " + subject;
  var options = {
    auth: {
      api_user: 'dragon2202',
      api_key: 'Ryo123456'
    }
  }
  var client = nodemailer.createTransport(sgTransport(options));
  //https://app.sendgrid.com/guide/integrate/langs/nodejs
  var email = {
    to: "tcalvin9@gmail.com",
    from: 'tcalvin9@gmail.com',
    subject: 'Contact Us Form',
    text: mailBody
  }
  client.sendMail(email, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      //console.log('Message sent: ' + info);
    }
  })

  res.redirect("/contactUs.html");
})

const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
  console.log('Server listening at 5000')
})

//https://stackoverflow.com/questions/28822034/simple-node-js-server-that-sends-htmlcss-as-response
//https://github.com/bradtraversy/node_passport_login/blob/master/app.js
//https://www.scribens.com/

