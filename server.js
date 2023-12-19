const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function (req, res, next) {
    var firstNumber = parseInt(req.params.firstNumber)
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if (result == null) {
        res.json({ result: result, statusCode: 400 }).status(400)
    }
    else { res.json({ result: result, statusCode: 200 }).status(200) }
})

app.get('/multiplyTwoNumbers/:firstNumber/:secondNumber', function (req, res, next) {
    var firstNumber = parseInt(req.params.firstNumber)
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber * secondNumber || null
    if (result == null) {
        res.json({ result: result, statusCode: 400 }).status(400)
    }
    else { res.json({ result: result, statusCode: 200 }).status(200) }
})

const port = 8080;
app.listen(port, () => {
    console.log("Port connected " + port);
})

module.exports = {

    helloWorld: function () {
        return 'hello world';
    },

    multiplication: function (number1, number2) {
        return number1 * number2;
    },

    arrayOfNumbers: function () {
        return [0, 1, 2, 3, 4, 5];
    }
};