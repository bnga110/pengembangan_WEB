/** 
 * Fungsi untuk menampilkan salam ke terminal
 * Author: Instruktur TIK
 * version: 1.0
 * Date: 8 Juli 2025
 */
 
function tampilkanSalam() {
    // Menyimpan pesan salam
    const pesan = "Halo! selamat datang di dunia Node.js";
    
    // Menampilkan pesan terminal 
    console.log(pesan);
}

// Mengekspor fungsi agar bisa digunakan difile lain
module.exports = tampilkanSalam;

