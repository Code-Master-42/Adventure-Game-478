#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
;
let player = await inquirer_1.default.prompt({
    type: "input",
    name: "name",
    message: "Please Enter your name:"
});
let opponent = await inquirer_1.default.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["Attack", "Drink Portion", "Run Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is(${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is(${o1.fuel})`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.italic.bold("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is(${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is(${p1.name})`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.italic.bold("You Win"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green(`Drink Health Portion Your Fuel is${p1.fuel}`));
        }
        if (ask.opt == "Run Your Life..") {
            console.log(chalk_1.default.bold.italic.red(`You Loose,Better Luck Next Time`));
            process.exit();
        }
    }
    if (opponent.select == "Assassin") {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["Attack", "Drink Portion", "Run Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is(${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is(${o1.fuel})`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.italic.bold("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is(${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is(${p1.name})`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.italic.bold("You Win"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green(`Drink Health Portion Your Fuel is${p1.fuel}`));
        }
        if (ask.opt == "Run Your Life..") {
            console.log(chalk_1.default.bold.italic.red(`You Loose,Better Luck Next Time`));
            process.exit();
        }
    }
    if (opponent.select == "Zombie") {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["Attack", "Drink Portion", "Run Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is(${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is(${o1.fuel})`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.italic.bold("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is(${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is(${p1.name})`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.italic.bold("You Win"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green(`Drink Health Portion Your Fuel is${p1.fuel}`));
        }
        if (ask.opt == "Run Your Life..") {
            console.log(chalk_1.default.bold.italic.red(`You Loose,Better Luck Next Time`));
            process.exit();
        }
    }
} while (true);
