//Output a prompt
process.stdout.write('prompt > ');


process.stdin.on('data', (data) => {

    let cmd = data.toString().trim(); //remove the newline

    if (cmd == 'pwd') {
        const pwd = require('./pwd')
        pwd();
    }
    if (cmd == 'ls') {
        const ls = require('./ls')
        ls();
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
 
});


