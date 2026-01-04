// func takes 2 arg of arrays and 1 number
// 2ta array merge
// filter out number greater than 10
// check if input number is present in that array
// if yes, print number n is present
// else warn user to send another number

const  findNum=(a1,a2,num)=>{
    const mergedArr=[...a1,...a2]
    const numberArrLessThen10=mergedArr.filter(num=> num<10)

  const hasMyNumber=numberArrLessThen10.includes(num)

  if(hasMyNumber){
    console.log("has my number num")
}else{
    console.warn("number is missing")
}
}

const arr1=[10,20,30,40,50]
const arr2=[1,3,5,7,9]
const myInputNumber=9
// findNum(arr1,arr2,myInputNumber)

// const findNum2 = (a1, a2, num) => {
//   const mergedArr = [...a1, ...a2];

//   const numberArrLessThen10 = mergedArr.filter(n => n < 10); 

//   const hasMyNumber = numberArrLessThen10.includes(num); 

//   if (hasMyNumber) { // BUG 4
//     console.log(`number ${num} is present`); // BUG 5
//   } else {
//     console.warn("number is missing");
//   }
// };

// const checkValue = (arr1, arr2, n) => {
//   const merged = arr1.concat(arr2);

//   const filtered = merged.filter(num => num > 0 && num <= 20);

//   let found = false;

//   filtered.forEach(value => {
//     if (value === n) {
//       found = true;
//     }
//   });

//   if (found == "true") {
//     console.log("Number n exists");
//   } else {
//     console.warn("Number not found");
//   }
// };

// checkValue([5, -3, 12], [25, 20, 8], 12);

const analyzeNumbers = (a, b, n) => {
  const merged = [...a,... b];

  const numbers = merged.map(val => Number);

  const filtered = numbers.filter(num => num > 1 && num < 50);

  const foundNumber = filtered.find(num => num == n);

  if (filtered.includes(foundNumber)) {
    console.log("Number n found");
  }

  const hasBigNumber = filtered.some(num => num > Number("40"));

  if (hasBigNumber === false) {
    console.warn("No values above 40");
  }
};

analyzeNumbers([10, "20", 60], ["5", 45], 20);