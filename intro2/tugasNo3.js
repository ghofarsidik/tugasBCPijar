// let nilaiAwal = 5;
// let nilaiAkhir = 20;
// let dataArray = [2, 25, 4, 14, 17, 30, 8];


function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (typeof !nilaiAwal == 'number'){
        console.log('Nilai awal harus angka')
        return   

    } else if (typeof !nilaiAkhir == 'number'){
        console.log('Nilai akhir harus angka')
        return

    } else if (!dataArray.every(function (item) { return typeof item === 'number' })){
        console.log('ada data di array yang bukan angka, cek kembali data arraynya')
        return
    
    } else if (nilaiAwal > nilaiAkhir){
        console.log('nilai awal harus lebih kecil dari nilai akhir')
        return
    
    } else if (dataArray.length <= 5){
        console.log('jumlah data array harus lebih dari 5, tambah lagi data arraynya')
        return
    } 
    // else (console.log("data semua valid"))

    dataUrut = dataArray.sort(function(a,b){return a - b})
    
    
    let hasilSeleksi = []
    for (let i = 0; i < dataUrut.length; i++) {
        if (nilaiAwal < dataUrut[i] && dataUrut[i] < nilaiAkhir) {
            hasilSeleksi.push(dataUrut[i])
        }
        
    }
    
    if (hasilSeleksi.length > 0) {
        console.log(hasilSeleksi)
    
    } else {
        console.log ("tidak ada yang sesuai kriteria")}
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])