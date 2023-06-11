console.log('recursion rocks!');

const fib = (length) => {
    let numArr = [];
    let num = 0;
    for (let i = 0; i < length; i++) {
        if( numArr.length < 2) {
            numArr.push(i)
        } else {
            num = numArr[i - 1] + numArr[i - 2];
            numArr.push(num);
        }
    }
    console.log(numArr);
}

fib(8);