const express = require("express");

const app = express();

app.use(express.json())

app.post("/health-checkup",function(req,res){
    //  kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("You have "+ kidneyLength+" kidneys")
})

// global catches using app.use()

app.use(function(err, req, res,next){
    res.json({
        msg: "Something wrong"
    })
})

app.listen(3000)