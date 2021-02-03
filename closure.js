function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = new stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = new stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());


//closure : when we return any function from another function and if the inside function can access the declared value of the outside function then we work with this outside function by taking value of the inside function . sometime it is very confusing thats why we have to follow the link - thatjsdude.com

//OMG this dialouge about closure is really mind blowing that is ---"I promise, you will be able to explain the following concepts to your grandma."

// link => https://www.thatjsdude.com/jsConcepts/concepts/scope.html

