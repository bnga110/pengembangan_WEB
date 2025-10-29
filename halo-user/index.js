const readline = require('readline');

// Buat interface untuk input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Minta nama user
rl.question('siapa nama kamu? ',(nama) => {
    console.log(`Halo ${nama}!`);
    rl.close();
});