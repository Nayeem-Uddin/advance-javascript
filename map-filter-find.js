//Here we will work with map, filter, find, if possible then with reduce as well for each
//To understand the power of map lets work with an array in our manual wa

numbers = [5, 5, 7, 3, 4];
const result = [];

for(let i = 0 ; i < numbers.length ; i++){
    const element = numbers[i];
    const output = element * element;
    result.push(output);
}

console.log(result);

// The same way we will work with map but in smart way

const result = numbers.map(function(element){
    return element * element;
});
console.log(result);


//The more convenient way we will work

const result = numbers.map(element => element * element);
console.log(result);    //map will work with every elements of array and give the output as array

const result = numbers.map( x => x * x) //same thing either we can use element or we can use x or any name
console.log(result);


//filter is another charming way to work with array but it will work with specific elements as give output as array

const filterWay = numbers.filter(element => element > 3);
console.log(filterWay);


//find will work with array but if the condition is true then it will give the first element as output
const findWay = numbers.find(element => element > 3);
console.log(findWay);
