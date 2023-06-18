console.log("recursion rocks!");

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
};

const fibsRec = (num) => {
  let numArr = [];
  if (num === 1) {
    numArr.push(0);
    return numArr;
  }
  if (num === 2) {
    numArr.push(0, 1);
    return numArr;
  } else {
    numArr = fibsRec(num - 1);
    return numArr.concat(numArr[numArr.length - 1] + numArr[numArr.length - 2]);
  }
};

let arrToSort = [5, 2, 1, 6, 3, 4];

const mergeArrs = (newArrL, newArrR) => {
  let newArr = [];
  let indexL = 0;
  let indexR = 0;
  // compare and copy elements
  while (indexL < newArrL.length && indexR < newArrR.length) {
    if (newArrL[indexL] < newArrR[indexR]) {
      newArr.push(newArrL[indexL]);
      indexL++;
    } else {
      newArr.push(newArrR[indexR]);
      indexR++;
    }
  }
  // copy the remaining elements
  for (; indexL < newArrL.length; indexL++) {
    newArr.push(newArrL[indexL]);
  }
  for (; indexR < newArrR.length; indexR++) {
    newArr.push(newArrR[indexR]);
  }
  return newArr;
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let middlePoint = Math.round(arr.length / 2);
    let newArrL = arr.slice(0, middlePoint);
    let newArrR = arr.slice(middlePoint);
    let firstRec = mergeSort(newArrR);
    let secondRec = mergeSort(newArrL);
    return mergeArrs(firstRec, secondRec);
  }
};

console.log(mergeSort(arrToSort));
