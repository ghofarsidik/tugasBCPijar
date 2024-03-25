/*1. includes merupakan methods untuk mengecek apakah string memuat suatu substring tertentu atau array memuat suatu nilai tertentu. 
jika substring termuat dalam string, maka akan menghasilkan nilai true
contoh*/
// string = "ini budi, budi bermain bola";
// substring = "bola";
// let cek1 = string.includes(substring)
// console.log(cek1);

/*2. every dan some merupakan methods untuk mengecek apakah suatu array memenuhi suatu aturan tertentu atau tidak.
perbedaan antara every dan some adalah ketika every bernilai false jika terdapat minimal 1 anggota yang salah dan benar ketika semua benar,
sedangkan some bernilai true jika terdapat minimal 1 anggota yang benar dan false jika semua salah.
contoh*/
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// console.log(array.every(function(angka){return angka <=5}))
// console.log(array.some(function(angka){return angka <=5}))

/*3. getDate/Month/FullYear merupakan suatu method untuk mendapatkan bagian dari tanggal object date
contohnya*/
// console.log(new Date().getDate());
// console.log(new Date().getMonth());
// console.log(new Date().getFullYear());

/*4. map merupakan suatu method untuk membuat suatu array baru dengan hasil fungsi tertentu terhadap semua anggota array yang ada
contoh*/
// array = [1, 2, 3]
// arrayKaliTiga = array.map(function(angka) { return  angka * 3})
// console.log(arrayKaliTiga);

/*5. find merupakan method untuk menemukan elemen pertama yang memenuhi kriteria tertentu,
contoh*/
// array = [1, 3, 5, 6, 7, 8]
// const genap = (angka) => angka % 2 === 0;
// console.log(array.find(genap));

/*6. Math.max() atau Math.min() merupakan suatu method untuk menemukan suatu elemen angka yang paling besar atau paling kecil.
contoh*/
// angka = [5, 2, 3, 1, 7, 9, 2, 4]
// console.log(Math.max(...angka));
// console.log(Math.min(...angka));

/*7. toUpperCase() dan toLowerCase() dan toUpperCase() merupakan suatu method untuk merubah karakter dari kata/kalimat menjadi besar/kecil semua.
contoh*/
// kalimat = "Ini Budi, Budi Bermain Bola"
// console.log(kalimat.toUpperCase());
// console.log(kalimat.toLowerCase());

/*8. object.keys() merupakan suatu method untuk mendapatkan array dari properti sebuah objek.
contoh*/
// const data ={
//     nama: "ags",
//     usia: 25,
//     kota: "Jakarta"
// }
// console.log(Object.keys(data));

/*9. slice merupakan suatu method untuk mendapatkan sebagaian nilai dari suatu array.
contoh*/
// array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
// console.log(array.slice(2, 6));

/*10. Math.round merupakan suatu method untuk membulatkan nilai matematika ke nilai bulat terdekat.
untuk membuatkan ke atas bisa menggunakan Math.ceil dan untuk membulatkan kebawah bisa menggunakan Math.Floor.
contoh*/
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.4));

