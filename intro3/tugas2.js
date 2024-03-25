const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry, Data Not Found"), [])
        }
    }, 4000);
}

const showMonth = (error, month) => {
    if (!error) {
        mapMonth = month.map( month => month)
        console.log(mapMonth);
    } else {
        console.error(error.message);
    }

}

getMonth(showMonth)