const addData = (database, insertData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let updatedData = database.concat(insertData);
            if (updatedData) {
                resolve(updatedData);
            } else {
                reject(new Error('Failed to insert data'));
            }
        }, 3000);
    });
};

const database = [
    { id: 1, frontName: "Abdul", lastName: "Ghaffar", city: "Jakarta" }
];

const newData1 = { frontName: "Ghaffar", lastName: "Sidik", city: "Bogor" };

const startApp = async (database, data) => {
    try {
        const insertData = { id: database.length + 1, ...data }; 
        const result = await addData(database, insertData);
        console.log(result);
    } catch (error) {
        console.log(error.massage);
    }
};

startApp(database, newData1);

//pembatas----------------------------------------------------------------------------


const divisionDetector = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result
            if (number1 % number2 === 0){
                result = `${number1} dapat di bagi ${number2}`
            } else if (number2 % number1 === 0){
                result = `${number2} dapat di bagi ${number1}`
            }
            
            if (result) {
                resolve(result);
            } else {
                reject(new Error('kedua angka tidak bisa saling membagi'));
            }
        }, 3000);
    });
};


const startApp2 = async (number1, number2) => {
    try {
        const result = await divisionDetector(number1, number2);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
};

startApp2(5, 7);