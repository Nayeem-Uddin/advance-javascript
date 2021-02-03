                                    // hoisting
                                    // Answer: kono akta jinish declare kortesi
                                    // and oi jinish tar scope take uporer dike nie 
                                    // jawakei hoiting Boolean. amra jodi var use kori taile
                                    // easily hoisting korte parbo but jodi let othoba const use kori
                                    // taile hoisting korte parbo navigator.

                                    // eijooonon  var k nie khela kora jai shob jaigai but let othoba
                                    // const k nie shudhu matro scope er moddhe nie khela kora jai



let x = 10;
function add(num1,num2){
    const result = num1 + num2;
    if(result>10){
        var mood = 'happy';
        mood = 'chunky funky'   
    }
    console.log(mood);
    return result;
}
const output = add(10,20);
console.log(output);
//here in the block scope I use var thats why it didn't give me any error what else if I use let here


let x = 10;
function add(num1,num2){
    const result = num1 + num2;
    if(result>10){
        let mood = 'happy';
        mood = 'chunky funky'   
    }
    console.log(mood);
    return result;
}
const output = add(10,20);
console.log(output);
//for using let inside the scope it gives me error


//what will happen if i try to show the output before initilization
let x = 10;
function add(num1,num2){
    const result = num1 + num2;
    if(result>10){
        var mood = 'happy';
        mood = 'chunky funky'   
    }
    console.log(day);
    var day = "friday";
    console.log(mood);
    return result;
}
const output = add(10,20);
console.log(output);

//It will give me the output as undefined but not as error