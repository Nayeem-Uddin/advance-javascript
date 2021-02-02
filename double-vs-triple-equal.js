                                // double-vs-triple-equal
                            // double = check only the value
                        // triple = check value as well as type



const num1 = 100;
const num2 = 100;
if(num1 == num2){
    console.log('condition is true');
}else{
    console.log('condition is false');
}


const num1 = 100;
const num2 = '100';
if(num1 == num2){
    console.log('condition is true');
}else{
    console.log('condition is false');
}


const num1 = 100;
const num2 = "100";
if(num1 === num2){
    console.log('condition is true');
}else{
    console.log('condition is false');
}


const num1 = 1;
const num2 = true;
if(num1 == num2){
    console.log('condition is true');
}else{
    console.log('condition is false');
}


const num1 = 0;
const num2 = false;
if(num1 === num2){
    console.log('condition is true');
}else{
    console.log('condition is false');
}