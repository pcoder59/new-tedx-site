var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {
  var mailOptions = {
    from: req.body.email,
    to: "event.tedkochi@gmail.com",
    subject: req.body.subject,
    text: "Name: " + req.body.name + "\n\n" + req.body.message
  }
  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      res.render('index', { senderror: true, default: true });
    } else {
      res.render('index', { success: true, default: true });
    }
  });
});

module.exports = router;
