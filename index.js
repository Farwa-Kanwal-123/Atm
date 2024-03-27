#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 67890;
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code: ",
    },
]);
if (answer.pin === myPin) {
    let operations = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["withdraw", "checkBalance"],
            message: "select operation",
        },
    ]);
    if (operations.operation === "withdraw") {
        let selection = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: [500, 1000, 5000, 10000, 15000, 20000, 25000, 30000],
                message: "select amount",
            },
        ]);
        if (selection.amount > myBalance) {
            console.log("Insufficient balanace");
        }
        else {
            let remainingBalance = (myBalance -= selection.amount);
            console.log(`your remaining balance is ${remainingBalance}.`);
        }
    }
    else if (operations.operation === "checkBalance") {
        console.log(`your current balance is ${myBalance}.`);
    }
}
else {
    console.log("enter valid pin code.");
}
