var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'event.tedkochi@gmail.com',
    pass: 'hcetxlerqvdrqlie'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', [check('name').isLength({min: 1}).withMessage("Name is Required"), check('email').isEmail().withMessage("Invalid Email"), check('message').isLength({min: 1}).withMessage("Message is Required")], function(req, res, next) {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.redirect('/');
  } else {
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
  }
  console.log(req)

});

module.exports = router;

router.post("/signup", function (req,res,next{var name= req.body.name,var email= req.email,var phone= req.phone,var password= req.password}))
