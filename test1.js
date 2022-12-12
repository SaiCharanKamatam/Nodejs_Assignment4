const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const sum = num1+num2
    if(isNaN(num1) || isNaN(num2)){
        res.json({
            "status": "error",
            "message": "Invalid data types",
        })
    }else if(num1<-1000000 || num1<-1000000 || sum<-1000000){
        res.json({
            "status": "error",
            "message": "Underflow",
        })
    }else if(num1>1000000 || num1>1000000 || sum>1000000){
        res.json({
            "status": "error",
            "message": "Overflow",
        })
    }else{
        res.json({
            "status": "success",
            "message": "the sum of given two numbers",
            "sum": sum
        })
    }
})
app.post("/sub", (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const diff = num1-num2
    if(isNaN(num1) || isNaN(num2)){
        res.json({
            "status": "error",
            "message": "Invalid data types",
        })
    }else if(num1<-1000000 || num1<-1000000 || diff<-1000000){
        res.json({
            "status": "error",
            "message": "Underflow",
        })
    }else if(num1>1000000 || num1>1000000 || diff>1000000){
        res.json({
            "status": "error",
            "message": "Overflow",
        })
    }else{
        res.json({
            "status": "success",
            "message": "the difference of given two numbers",
            "difference": diff
        })
    }
})
app.post("/multiply", (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const product = num1*num2
    if(isNaN(num1) || isNaN(num2)){
        res.json({
            "status": "error",
            "message": "Invalid data types",
        })
    }else if(num1<-1000000 || num1<-1000000 || product<-1000000){
        res.json({
            "status": "error",
            "message": "Underflow",
        })
    }else if(num1>1000000 || num1>1000000 || product>1000000){
        res.json({
            "status": "error",
            "message": "Overflow",
        })
    }else{
        res.json({
            "status": "success",
            "message": "the product of given two numbers",
            "result": product
        })
    }
})
app.post("/divide", (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const divide = num1/num2
    if(num2==0){
        res.json({
            "status": "error",
            "message": "Cannot divide by zero"
        })
    }else if(isNaN(num1) || isNaN(num2)){
        res.json({
            "status": "error",
            "message": "Invalid data types",
        })
    }else if(num1<-1000000 || num1<-1000000 || divide<-1000000){
        res.json({
            "status": "error",
            "message": "Underflow",
        })
    }else if(num1>1000000 || num1>1000000 || divide>1000000){
        res.json({
            "status": "error",
            "message": "Overflow",
        })
    }else{
        res.json({
            "status": "success",
            "message": "the division of given two numbers",
            "result": divide
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))
