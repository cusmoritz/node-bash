module.exports = function () {
        const cwd = process.cwd();
        process.stdout.write('Present directory is: ');
        process.stdout.write(`\n${cwd}`);
        process.stdout.write('\nprompt > ');
};