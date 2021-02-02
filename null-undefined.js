//There are many ways to get a value's result as undefined . lets check one by one
//another thing comes into our mind that what is the difference between null and undefined



                    // null vs undefined
                    // null = which is explicitly declared by the developers or sometimes the valye was khali hoa gese eijonno null hoite pare abr kokhono kokhono developer ra kono kisu check korer jonno value ta k null kore dite pare. ak kothai etar kono existence navigator


                    // undefined = there is existence of undefined . amra jokhon kono kisu vul kori code lekhar shomoy othoba kothai jodi kono kisu missing thake shei khettre etar value undefined hoa jai




let name;
console.log(name); //declare the variable but there is no value inside the variable



let name = undefined;
console.log(name);



function add(num1,num2){
    console.log(num1+num2);
}
console.log(add(4,8)); //We didn't return anything thats why it gives us undefined




function add(num1,num2){
    console.log(num1+num2);
    return
}
console.log(add(5,5)); //this is another case



function add(num1,num2){
   console.log(num1+num2);
}
const result = add(5);
console.log(result); //arguments hosse 2 ta kintu amra pass kortesi 1 ta 




const person = {
    name:'kanchi',
    age:23
}
console.log(person.department); // ei name er property nai othoco amra try kortesi etar access korer.