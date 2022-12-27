const prompt = require("prompt-sync")({ sigint: true });
let table = parseInt(prompt("Enter power : "));
var i = 1;
while (i <= table){
    i++;
    console.log("2 * " + i + " = " + Math.pow(2, i));
}
