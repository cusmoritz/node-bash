// output a prompt
process.stdout.write('prompt > ');

// the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline
    const cwd = process.cwd();

    if (cmd == 'pwd'){
        process.stdout.write('Present directory is: ');
        process.stdout.write(`\n${cwd}`);
        process.stdout.write('\nprompt > ');
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});