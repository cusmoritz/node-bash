// we can access the pwd function and store it in a variable like so
const pwdFunc = require('./pwd');

// output a prompt
process.stdout.write('prompt > ');

// import the pwdFunc from pwd.js
// createRequire { pwdFunc } from "./pwd";

// the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline

    if (cmd == 'pwd'){
        pwdFunc();
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});