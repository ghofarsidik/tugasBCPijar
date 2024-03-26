const palindromeChecker = (word) => {
    //validasi
    if (typeof word !== "string") {
        console.log("input harus string")
        return
    }

    //step mereverse kata
    const reverseWord = word.toLowerCase() //mengubah semua karakter menjadi huruf kecil
                            .split('') //di pisahkan setiap karakter
                            .reverse() //mereverse setiap karakter
                            .join('') //menggabungkan kembali setiap karakter


    //pengecekan palindrome atau bukan
    if (word.toLowerCase() === reverseWord) {
        console.log(`kata ${word} merupakan palindrome`)
    } else {
        console.log(`kata ${word} bukan kata palindrome`)
    }
}

//----------------------------------------------------------------------------
const reverseSentenceChecker = (sentence) => {
    //validasi
    if (typeof sentence !== "string") {
        console.log(`input harus string`)
    }

    //proses mengubah urutan kata dalam kalimat
    reverseSentence = sentence  .split(" ") //memisahkan setiap kata dalam kalimat dengan pemisah spasi
                                .reverse() //memutar urutan kata dari kalimat
                                .join(" "); //menggabungkan kembali setiap kata menjadi 1 kalimat
    console.log(reverseSentence);
}

palindromeChecker("Kasur Rusak")

reverseSentenceChecker("Kasur Rusak")