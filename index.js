#!/usr/bin/env node

"use strict";
import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        // Use chalk to style headers
        name: `Send me an ${chalk.bold("email")}?`,
        value: () => {
          open("mailto:debasishbisoi524@gmail.com");
          console.log(
            "\nLooking forward to hearing your message and replying to you!\n"
          );
        },
      },
      {
        name: "Exit",
        value: () => {
          console.log("Good bye, have a nice day!\n");
        },
      },
    ],
  },
];

const data = {
  Name: chalk.bold.red("                               Debasish Bisoi"),
  Fact: chalk.white("I love Web-Dev and DSA In Java"),
  Github: chalk.white("https://github.com/DebasishBisoi524"),
  Website: chalk.white("https://debasish-portfolio-azure.vercel.app/"),
  LinkedIn: chalk.white(
    "https://www.linkedin.com/in/debasish-bisoi-2b76a9253/"
  ),
  npx: chalk.hex("#973131")("npx debasish-dev"),

  labelFact: chalk.bold.red("             Fact:"),
  labelGithub: chalk.bold.black("            Github:"),
  labelWebsite: chalk.bold.green("            Website:"),
  labelLinkedIn: chalk.bold.blue("          LinkedIn:"),
  labelCard: chalk.bold.white("              Card:"),
};

const me = boxen(
  [
    `${data.Name}`,
    ``,
    `${data.labelFact}  ${data.Fact}`,
    `${data.labelGithub}  ${data.Github}`,
    `${data.labelWebsite} ${data.Website}`,
    `${data.labelLinkedIn} ${data.LinkedIn}`,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold.yellow(
      "Hi There! I'm Debasish Bisoi, a passionate Full-Stack Web Developer"
    )}`,
    `${chalk.bold.yellow(
      "  and a DSA Problem Solver from India. I create beautiful, cool,  "
    )}`,
    `${chalk.bold.yellow(
      "and responsive Website. Toss me an email if you want to collab! "
    )}`,
    `${chalk.bold.yellow()}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);
console.log(me);

const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
