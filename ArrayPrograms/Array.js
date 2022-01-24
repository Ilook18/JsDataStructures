var numbers=new Array(10);
for(var i=0;i<10;i++){
 numbers[i]=Math.floor(Math.random() * 900) +100;
 }
console.log(numbers);
smallest=Number.MAX_VALUE;
secondSmallest=Number.MAX_VALUE;
largest=Number.MIN_VALUE;
secondLargest=Number.MIN_VALUE;
for(var i=0;i<=10;i++){
    if(numbers[i]<smallest){
        secondSmallest=smallest;
        smallest=numbers[i];
}else if(numbers[i]<secondSmallest && numbers[i] !=smallest){
 secondSmallest=numbers[i];
}
if(numbers[i]>largest){
    secondLargest=largest;
    largest=numbers[i];
}else if(numbers[i]>secondLargest && numbers[i] !=largest){
    secondLargest=numbers[i];
}
}
console.log("secondSmallest",secondSmallest);
console.log("secondLargest",secondLargest);