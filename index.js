const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const myMail = require("./mailFormat");
const http = require("http");
const cors = require("cors");
app.use(cors());
app.post("/api",(req,res)=>{
  
    var data = req.body;
    console.log(data);
    res.send(JSON.stringify({status:true,message:"seen"}));
    res.end();
    res.send()
  //   var txt = myMail.myMail(data.eventData.venue,data.eventData.note);
  //   var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'tonynereus@gmail.com',
  //     pass: 'tghsvxyjqmdowzsu'
  //   }
  // });
  // var mailOptions = {
  //   from: 'tonynereus@gmail.com',
  //   to: data.email,
  //   subject: 'Taylor Swift Ticket | The Eras Tour',
  // };
  // if(data.email != undefined ){
  //   transporter.sendMail({...mailOptions,html:txt}, function(error, info){
  //       if (error) {
  //         console.log(error);
  //         res.send(JSON.stringify({status:false,message:"seen error with email"}))
  //       }else {
  //           res.send(JSON.stringify({status:true,message:"seen"}))
  //         console.log('Email sent: ' + info.response);
  //       }
  //     });
  // }else{
  //   res.send(JSON.stringify({status:true,message:"email not sent "}))
  // }
});
const server = http.createServer(app);
server.listen(3000)
