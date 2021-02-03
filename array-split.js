const numbers = [2,3,4,3,6,7,9]
const resultSlice = numbers.slice(3,5);
console.log(resultSlice);
console.log(numbers);
// console.log(resultSplice);

//slice will start from the index number and end with the index number , it will find out the array and dont affect on the main array

const resultSplice = numbers.splice(2,2,91);
console.log(resultSplice);
console.log(numbers);

//it will start to find out the value from the index number and how many element it will take that numbers we are giving the second arguments.

//if we want we can also push the elements inside the deleted items

const resultJoin = numbers.join(" love ");
console.log(resultJoin);

