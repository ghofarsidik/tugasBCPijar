const totalPrice = (price, voucher, distance, tax) => {
    //validasi

    //validasi nilai harga
    if (typeof price !== 'number'){
        console.log("input harga harus angka")
        return

    //validasi nilai voucher
    } else if (typeof voucher !== 'string'){
        console.log('input kode voucher harus text/string')
        return
    
    //validasi nilai jarak
    } else if (typeof distance !== 'number'){
        console.log("input jarak harus angka")
        return

    //validasi nilai pajak
    } else if (typeof tax !== 'boolean') {
        console.log('input nilai pajak dengan true/false')
        return

    } else

    //perhitungan biaya ongkir
    if (Math.ceil(distance) <= 2){
        deliveryFee = 5000
    } else {
        deliveryFee = 5000 + (Math.ceil(distance) - 2) * 3000
    }

    //perhitungan biaya pajar
    if (tax = true) {
        taxValue = 5/100 * price
    } else {
        taxValue = 0
    }

    //penentuan dan perhitungan diskon
    if (voucher === "PIJARFOOD5"){
        if (price < 50000){
        console.log ('kode voucher PIJARFOOD tidak dapat digunakan karena tidak memenuhi minimal pemesanan 50.000')
        }
        if (price >= 50000) {
            discount = price * 50/100
            if (discount > 50000){
                discountValue = 50000
            } else {
                discountValue = discount
            }
        }
    }else if (voucher === "DITRAKTIRPIJAR"){
        if (price < 25000){
        console.log ('kode voucher DITRAKTIRPIJAR tidak dapat digunakan karena tidak memenuhi minimal pemesanan 25.000')
        }
        if (price >= 25000) {
            discount = price * 60/100
            if (discount > 30000){
                discountValue = 30000
            } else {
                discountValue = discount
            }
        }
    } else (discountValue = 0)

    //total
    let subTotal = price - discountValue + deliveryFee + taxValue
    
    //output
    console.log(`
    -------------------------------
    Harga       = ${price}
    Potongan    = ${discountValue}
    Biaya antar = ${deliveryFee}
    Pajak       = ${taxValue}
    SubTotal    = ${subTotal}
    ------------------------------`);
}

// totalPrice(100000, "PIJARFOOD5", 10, true)
// totalPrice(60000, "DITRAKTIRPIJAR", 3, true)
totalPrice(20000, '', 3, true)
