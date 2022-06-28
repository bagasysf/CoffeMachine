// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// const {coffeStock, isCoffeMachineReady} = require('./state')
// import {coffeStock as stock, isCoffeMachineReady} from './state.js';

// const makeCoffe = (type, miligrams) => {
//     if(coffeStock[type] >= miligrams) {
//         console.log('Kopi berhasil dibuat!')
//     } else {
//         console.log('Biji kopi habis!')
//     }
// }

// const displayStock = stock => {
//     for (const type in stock) {
//         console.log(type)
//     }
// }

// makeCoffe("robusta", 80)
// displayStock(coffeStock)
// console.log(coffeStock)

// console.log(stock)
// console.log(isCoffeMachineReady)

// try {
//     console.log("Awal blok try");
//     errorCode
//     console.log("Akhir blok try");
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {
//     console.log('Akan tetap dieksekusi')
// }

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let json = '{ "age": 30 }';
     
try {
    let user = JSON.parse(json);
     
    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }

    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
     
    errorCode
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
     
/* output
JSON Error: errorCode is not defined
*/