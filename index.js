#! /usr/bin/env node
console.log("Welcome To Farwa ATM Machine!");
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
            choices: ["withDraw", "fastCash", "checkBalance"],
            message: "select operation",
        },
    ]);
    if (operations.operation === "withDraw") {
        let withDrawlMoney = await inquirer.prompt({
            name: "money",
            type: "input",
            message: "Enter amount you have to withdrawl:"
        });
        if (withDrawlMoney.money <= myBalance) {
            console.log(`you have successfully withdrwal ${withDrawlMoney.money} rupees.`);
            let remainingBalance = (myBalance -= withDrawlMoney.money);
            console.log(`your remaining balance is ${remainingBalance}.`);
        }
        else {
            console.log("you have insufficient balance.");
        }
    }
    else if (operations.operation === "fastCash") {
        let selection = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: [500, 1000, 5000, 10000, 15000, 20000, 25000, 30000],
                message: "select amount",
            },
        ]);
        if (selection.amount <= myBalance) {
            let remainingBalance = (myBalance -= selection.amount);
            console.log(`you have successfully withdrwal ${selection.amount} rupees.`);
            console.log(`your remaining balance is ${remainingBalance}.`);
        }
        else {
            console.log("Insufficient balanace");
        }
    }
    else if (operations.operation === "checkBalance") {
        console.log(`your current balance is ${myBalance}.`);
    }
}
else {
    console.log("enter valid pin code.");
}
