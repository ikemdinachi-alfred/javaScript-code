const prompt = require("prompt-sync")()

let entry = prompt("please Enter password: ")
    console.log(/([A-Z]+)([a-z]+)([0-9]){6,}/.test(entry))
