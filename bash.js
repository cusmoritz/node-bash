// getting functions from other files:
const pwdFunc = require('./pwd');
const lsFunc = require('./ls');
const catFunc = require('./cat');

// output a prompt
process.stdout.write('prompt > ');

// the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline

    if (cmd == 'pwd'){
        pwdFunc();
    } else if (cmd == 'ls') {
        lsFunc();
    } else if (cmd.startsWith('cat')) {

        const fileName = cmd.substring(3).trim();
        catFunc(fileName);

    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});