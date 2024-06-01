#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease(){
        let fuel=this.fuel-25
        this.fuel=fuel
    }
    fuelIncrease(){
        this.fuel=100
    }
};
class Opponent{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name=name;
    }fuelDecrease(){
        let fuel=this.fuel-25
        this.fuel=fuel
    }
};
let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter your name:"
})
let opponent=await inquirer.prompt({
    type:"list",
    name:"select",
    message:"select your opponent",
    choices:["Skeleton","Assassin","Zombie"],
})
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)
do{
if(opponent.select=="Skeleton"){
let ask = await inquirer.prompt({
    type:"list",
    name:"opt",
    message:"select your Opponent",
    choices:["Attack","Drink Portion","Run Your Life.."]
});

if(ask.opt=="Attack"){
    let num =Math.floor(Math.random() *2)
    if(num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is(${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is(${o1.fuel})`))
        if(p1.fuel<=0){
            console.log(chalk.red.italic.bold("You Loose,Better Luck Next Time"))
            process.exit()
        }
    }
if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel is(${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel is(${p1.name})`))
        if(o1.fuel<=0){
            console.log(chalk.green.italic.bold("You Win"))
        process.exit()}
}};
if(ask.opt=="Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`Drink Health Portion Your Fuel is${p1.fuel}`))
}
if(ask.opt=="Run Your Life.."){
    console.log(chalk.bold.italic.red(`You Loose,Better Luck Next Time`))
    process.exit()
}}
if(opponent.select=="Assassin"){
let ask = await inquirer.prompt({
    type:"list",
    name:"opt",
    message:"select your Opponent",
    choices:["Attack","Drink Portion","Run Your Life.."]
});
if(ask.opt=="Attack"){
    let num =Math.floor(Math.random() *2)
    if(num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is(${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is(${o1.fuel})`))
        if(p1.fuel<=0){
            console.log(chalk.red.italic.bold("You Loose,Better Luck Next Time"))
            process.exit()
        }
    }
if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel is(${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel is(${p1.name})`))
        if(o1.fuel<=0){
            console.log(chalk.green.italic.bold("You Win"))
        process.exit()}
}};
if(ask.opt=="Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`Drink Health Portion Your Fuel is${p1.fuel}`))
}
if(ask.opt=="Run Your Life.."){
    console.log(chalk.bold.italic.red(`You Loose,Better Luck Next Time`))
    process.exit()
}}
if(opponent.select=="Zombie"){
let ask = await inquirer.prompt({
    type:"list",
    name:"opt",
    message:"select your Opponent",
    choices:["Attack","Drink Portion","Run Your Life.."]
});
if(ask.opt=="Attack"){
    let num =Math.floor(Math.random() *2)
    if(num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is(${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is(${o1.fuel})`))
        if(p1.fuel<=0){
            console.log(chalk.red.italic.bold("You Loose,Better Luck Next Time"))
            process.exit()
        }
    }
if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel is(${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel is(${p1.name})`))
        if(o1.fuel<=0){
            console.log(chalk.green.italic.bold("You Win"))
        process.exit()}
}};
if(ask.opt=="Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`Drink Health Portion Your Fuel is${p1.fuel}`))
}
if(ask.opt=="Run Your Life.."){
    console.log(chalk.bold.italic.red(`You Loose,Better Luck Next Time`))
    process.exit()
}}}
while(true)







