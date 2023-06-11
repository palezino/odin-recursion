console.log('recursion rocks!');

const fib = (num) => {
    let numArr = [];
    for (let i = 0; i < num; i++) {
        if (numArr.length === 0 || numArr.length === 1) {
            numArr.push(numArr.length);
        } else {
            numArr.push(numArr[numArr.length - 1] + numArr[numArr.length - 2]);
        }
    }
    console.log(numArr);
}

const fibsRec = (num) => {
    let numArr = [];
    if (num === 1) {
        numArr.push(0);
        return numArr;
    } 
    if (num === 2) {
        numArr.push(0,1);
        return numArr;
    } else {
        numArr = fibsRec(num-1);
        return numArr.concat(numArr[numArr.length - 1] + numArr[numArr.length - 2]);
    }
}