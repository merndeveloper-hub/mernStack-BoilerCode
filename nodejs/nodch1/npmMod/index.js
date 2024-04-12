const validator = require('validator');
 const chalk  = require('chalk');

// console.log(chalk.blue('hello world'));
const val = validator.isEmail('foo@bar.com');
console.log(val ? chalk.blue.reverse(val):chalk.red.reverse(val) );
console.log(val);
