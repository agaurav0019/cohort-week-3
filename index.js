const express = require("express");

const app = express();

let numberofRequests = 0;

function calculateRequests(req,res,next){
    numberofRequests++;
    console.log(numberofRequests);
    next()
}

app.get("/health-checkup",calculateRequests,function(req,res){
    // const username = req.headers.username;
    // const password = req.headers.password;
    // const kidneyId = req.query.kidneyId;
    // if(!(username == 'admin' && password=="pass")){
    //     res.status(400).json({msg:"somethngs up with your input"});
    //     return
    // }
    // if(kidneyId != 1 && kidneyId != 2){
    //     res.status(400).json({msg:"somethngs up with your input"});
    //     return
    // }
    // res.json({
    //     msg: "your kidney is fine!"
    // })
})

app.listen(3000)