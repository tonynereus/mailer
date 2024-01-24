const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const myMail = require("./mailFormat");
app.post("./api",(req,res)=>{
    var data = req.body;
    var txt = myMail.myMail(data.eventData.venue,data.eventData.note);
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tonynereus@gmail.com',
      pass: 'tghsvxyjqmdowzsu'
    }
  });
  var mailOptions = {
    from: 'tonynereus@gmail.com',
    to: data.email,
    subject: 'Taylor Swift Ticket | The Eras Tour',
  };
  if(data.email != undefined ){
    transporter.sendMail({...mailOptions,html:txt}, function(error, info){
        if (error) {
          console.log(error);
          res.send(JSON.stringify({status:false,message:"seen error with email"}))
        }else {
            res.send(JSON.stringify({status:true,message:"seen"}))
          console.log('Email sent: ' + info.response);
        }
      });
  }else{
    res.send(JSON.stringify({status:true,message:"email not sent "}))
  }
});
app.listen("3000");