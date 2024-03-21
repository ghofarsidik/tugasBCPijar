const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline",
    "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]

function cariNama(keyword, banyakNama, callback){
    let hasilCari = [];
    for (let i = 0; i< name.length; i++){
        if (name[i].toLowerCase().includes(keyword)){
            hasilCari.push(name[i]);
        }
    }
    return callback(hasilCari, banyakNama);
}

function seleksiNama(hasilCari, banyakNama){
    hasilSeleksi = [];
    x = banyakNama
    for (let i = 0; i < hasilCari.length && i < banyakNama; i++){
        hasilSeleksi.push(hasilCari[i])  
    }
    return hasilSeleksi
}

let search = cariNama("sulit", 3, seleksiNama)
console.log(search);