const divideAndSort = (number) => {
    if (isNaN(number)){
        console.log("input harus angka")
        return
    }
    let numDivSort = number .toString()
                        .split('0')
                        .map(array => Array.from(array).sort((a,b)=> a-b).join(''))
                        .join('')
    let result = parseInt(numDivSort)
    console.log (result)
}

divideAndSort(5956560159466056)