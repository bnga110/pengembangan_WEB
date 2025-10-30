const readline = require('readline')

// Buat interface untuk baca input terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Minta user memasukkan kalimat
rl.question('masukkan kalimat: ',(input) => {
    const jumlahKata = input.trim().split(/\s+/).length; // hiotung kata
    const jumlahHuruf = input.replace(/\s+/g, ''). length; // hitung huruf

    console.log(`Hasil Analisis:`)
    console.log(`jumlah kata   : ${jumlahKata}`);
    console.log(` jumlah huruf : ${jumlahHuruf}`);

rl.close();
})