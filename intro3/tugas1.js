const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', "rabu", 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day.toLowerCase()
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error(`Hari ${day} bukan hari kerja`))
            }
        }, 3000)
    })
}

// 1. try catch

// const startApp = async() => {
//     try {
//     dateToday = new Date().getDay()
//     const today = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][dateToday];
//     const result = await cekHariKerja(today)
//     console.log(`${result} adalah hari kerja`)
//     } catch (error) {
//     console.log(error)
//     }
// }
// startApp()


//pembatas--------------------------------------------------------------------------------------------------------


//2. then catch

// const dateToday = new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(new Date())
// cekHariKerja(dateToday)
// .then (day => {
//     console.log(`hari ${day} adalah hari kerja`);
// })
// .catch (error => {
//     console.error('Terjadi kesalahan,', error.message);
// })

