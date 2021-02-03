//break

numbers = [1,2,4,5,3,6];
for(let i =0 ; i< numbers.length;i++){
    if(numbers[i]>3){
        break;
    }
    console.log(numbers[i]);
}

// continue

numbers = [1,-3,4,-2,5,-3,6];
for(let i =0 ; i< numbers.length;i++){
    if(numbers[i]<0){
        continue;
    }
    console.log(numbers[i]);
}
