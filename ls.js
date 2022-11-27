const fs = require('fs');

module.exports = function() {
    // fs.readdir(path[, options], callback)
    // readdir reads the contents of a directory 
    // where 'files' is an array of the names of the files in the directory
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(files.join('\n'));
            process.stdout.write('\nprompt > ');
        }
    })
};