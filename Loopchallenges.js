// problem 1
for(i=1; i <= 20; i++){
    if((i % 2) != 0)
        console.log(i)


}

// problem 2


for(i=100; i >= 0; i--){
    if((i % 3) == 0)
    console.log(i);
}


//problem3

var array =[4, 2.5, 1, -0.5, -2, -3.5]
for(i=0; i < array.length; i++){
    console.log(array[i]);
}



//problem 4
var sum = 0;
for(i=1; i <= 100; i++){
    sum += i;

}
console.log(`1 + 2 + 3 + ... + 99 + 100 = ${sum}`)
//console.log("1 + 2 + 3 + ... + 99 + 100 = " + sum) 

//problem 5
var product = 1;
for(i=1; i <= 12; i++){
    product *= i;

}
console.log(`1 * 2 * 3 * ... * 11 * 12 = ${product}`)


