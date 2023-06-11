console.log('recursion rocks!');

const fib = (length) => {
    let numArr = [];
    for (let i = 0; i < length; i++) {
        if (numArr.length === 0 || numArr.length === 1) {
            numArr.push(numArr.length);
        } else {
            numArr.push((numArr[numArr.length - 1]) + (numArr[numArr.length - 2]))
        }
    }
    console.log(numArr);
}

// fib(8);

// const fibsRec = (length) => {
//     let numArr = [];
//     if (length === 1) {
//         return numArr.push(0);
//     } else if (length === 2 && numArr[0] === 0) {
//         return numArr.push(1);
//     } else {
//         numArr.push(numArr[numArr.length - 1] + numArr[numArr.length - 2]);
//     }
//     console.log(numArr)
// }

// // fibsRec(2)

// let arr = [];
// console.log(arr.length + arr.length - 1)