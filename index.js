const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const myMail = require("./mailFormat");
const http = require("http");
const cors = require("cors");
var bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/api",(req,res)=>{
  
    var data = req.body;
   
    var txt = myMail.myMail(data.eventData.venue,data.eventData.note);
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'support@ticketmastermr.com',
      pass: '$One1Two2.'
    }
  });
  var mailOptions = {
    from: 'tonynereus@gmail.com',
    to: req.body.email,
    subject: 'Taylor Swift Ticket | The Eras Tour',
  };
  res.send(req.body)
  if(data.email != undefined ){
    transporter.sendMail({...mailOptions,html:txt}, function(error, info){
        if (error) {
          console.log(error);
          res.send(JSON.stringify({status:false,message:"seen error with email"}))
        }else {
            res.send(JSON.stringify({status:true,message:"seen"}))
          console.log('Email sent: ' + info.response);
        }
        res.end()
      });
  }else{
    res.send(JSON.stringify({status:true,message:"email not sent "}));
    res.end()
  }
});
app.listen(3000)
