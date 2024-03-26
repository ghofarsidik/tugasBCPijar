//sampel lain dengan asumsi diskon dihitung berdasarkan total harga

const totalPrice = (price, voucher, distance, tax) => {
    if (typeof price !== 'number'){
        console.log("input harga harus angka")
        return

    } else if (typeof voucher !== 'string'){
        console.log('input kode voucher harus text/string')
        return

    } else if (typeof distance !== 'number'){
        console.log("input jarak harus angka")
        return

    } else if (typeof tax !== 'boolean') {
        console.log('input nilai pajak dengan true/false')
        return

    } else

    if (Math.ceil(distance) <= 2){
        deliveryFee = 5000
    } else {
        deliveryFee = 5000 + (Math.ceil(distance) - 2) * 3000
    }

    if (tax = true) {
        taxValue = 5/100 * price
    } else {
        taxValue = 0
    }

    subTotal1 = price + taxValue + deliveryFee

    if (voucher = "PIJARFOOD5"){
        if (price < 50000){
        console.log ('kode voucher tidak dapat digunakan karena tidak memenuhi minimal pemesanan 50.000')
        discountValue = 0
        }
        if (price >= 50000) {
            discount = subTotal1 * 50/100
            if (discount > 50000){
                discountValue = 50000
            } else {
                discountValue = discount
            }
        }
    }else if (voucher = "DITRAKTIRPIJAR"){
        if (price < 25000){
        console.log ('kode voucher tidak dapat digunakan karena tidak memenuhi minimal pemesanan 50.000')
        discountValue = 0
        }
        if (price >= 25000) {
            discount = subTotal1 * 60/100
            if (discount > 30000){
                discountValue = 30000
            } else {
                discountValue = discount
            }
        }
        
    } else (discountValue = 0)

    let subTotal2 = price - discountValue + deliveryFee + taxValue
    //output
    console.log(`
    -------------------------------
    Harga       = ${price}
    Potongan    = ${discountValue}
    Biaya antar = ${deliveryFee}
    Pajak       = ${taxValue}
    SubTotal    = ${subTotal2}
    ------------------------------`);
}

totalPrice(50000, "PIJARFOOD5", 10, true)