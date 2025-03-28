// import chalk from 'chalk';
// import figlet from 'figlet';
// import inquirer from 'inquirer';
// import { createSpinner } from "nanospinner";
// import chalkAnimation from 'chalk-animation';
// import gradient from "gradient-string";

// // const answer = await inquirer.prompt({
// //     type: "list",
// //     name: "language",
// //     message: "What is your favorite programming language?",
// //     choices: ["JavaScript", "Python", "Java", "C++", "Ruby"],
   
// // })
// // console.log(chalk.green(`Great! Your favorite programming language is ${answer.language}`));

// // const rainbow = chalkAnimation.rainbow("Hello World!");
// // setTimeout(() => {
// // rainbow.stop();
// // }, 2000);


// // figlet("Hello!", (err, data) => {
// //     console.log(data);
// //     });


// // const spinner = createSpinner("Processing...").start();
// // setTimeout(() => {
// //     spinner.success({ text: "Done!" });
// //     }, 3000);
    
// let playerName;
// const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));
// const rainbow = chalkAnimation.rainbow("Amitabh G bnai gay Crorepati?");
// await sleep();
// rainbow.stop();
// console.log(`
//     ${chalk.bgYellow("How to Play")}
//     I am a process on your computer.
//     If you get any question wrong, you will be ${chalk.red("Samay Samapth Ghalat Jawab")}.
//     Answer all questions correctly to become a Crorepati!
// `);
// const answers = await inquirer.prompt({
//     name: "playerName",
//     type: "input",
//     message: "What's your name?",
//     default() {
//     return "Player";
//     },
//     });
//     playerName = answers.playerName;
//     async function question() {
//         const answer = await inquirer.prompt({
//             name: "q1",
//             type: "list",
//             message: "What are the major laptop company?",
//             choices: ["Lenovo", "Apple", "Hp", "Dell"],
//         });
//         return handleAnswer(answer.q1 === "Lenovo");
//     }
//     async function handleAnswer(isCorrect) {
//         const spinner = createSpinner("Checking your answer...").start();
//         await sleep();
//         if (isCorrect) {
//             spinner.success();
//             console.log(chalk.green(`🎉 Correct! Well done, ${playerName}!`));
//         } else {
//             spinner.error();
//             console.log(chalk.red(`☠️ ☠️ ☠️  Wrong answer! Game over, ${playerName}.`));
//             process.exit(1);
//         }
//     }
//     await question();
    
//     async function winner() {
//         console.clear();
//         const msg = `Congrats, ${playerName}! You are the winner!\n$1,000,000`;
    
//         return new Promise((resolve, reject) => {
//             figlet(msg, (err, data) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 console.log(gradient.pastel.multiline(data));
//                 resolve();
//             });
//         });
//     }

//     await winner();


import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

async function welcome() {
    const rbt = chalkAnimation.rainbow("Amitabh g Bnai gay CrorePati?\n");
    await sleep();
    rbt.stop();

    console.log(`
        ${chalk.bgBlue("How to Play")}
        I am a process on your computer.
        If you get any question wrong, you will be ${chalk.red("eliminated")}.
        Answer all questions correctly to become a Crorepati!
    `);
}

async function askName() {
    const answers = await inquirer.prompt({
        name: "playerName",
        type: "input",
        message: "What's your name?",
        default() {
            return "Player";
        },
    });
    playerName = answers.playerName;
}

async function question1() {
    const answer = await inquirer.prompt({
        name: "q1",
        type: "list",
        message: "What is the capital of India?",
        choices: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    });
    return handleAnswer(answer.q1 === "Delhi");
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner("Checking your answer...").start();
    await sleep();

    if (isCorrect) {
        spinner.success();
        console.log(chalk.green(`🎉 Correct! Well done, ${playerName}!`));
    } else {
        spinner.error();
        console.log(chalk.red(`💀 Wrong answer! Game over, ${playerName}.`));
        process.exit(1);
    }
}

async function winner() {
    console.clear();
    const msg = `Congrats, ${playerName}! You are the winner!\n$1,000,000`;

    return new Promise((resolve, reject) => {
        figlet(msg, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            console.log(gradient.pastel.multiline(data));
            resolve();
        });
    });
}

async function main() {
    await welcome();
    await askName();
    await question1();
    await winner();
}

main();
