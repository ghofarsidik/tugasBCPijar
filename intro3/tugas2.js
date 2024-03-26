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
        month.map((month, index) => console.log(`${index + 1}. ${month}`));

    } else {
        console.error(error.message);
    }

}

getMonth(showMonth)