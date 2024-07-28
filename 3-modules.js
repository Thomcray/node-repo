// Modules

//CommonJS, every file is a module(by default)
//Modules - Encapsulated code (only share minimum)

const { John, Peter } = require("./4-modules1");
const sayHi = require("./5-utils");
const data = require("./6-alternative-syntax");
require("./7-require-no-variable");

sayHi("Susan");
sayHi(John);
sayHi(Peter);
