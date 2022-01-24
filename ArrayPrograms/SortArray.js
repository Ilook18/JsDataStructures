var numbers=new Array(10);
var temp=0;
for(var i=0;i<10;i++){
 numbers[i]=Math.floor(Math.random() * 900) +100;
 }
console.log(numbers);
for(i=0;i<10;i++){
 for(j=0;j<10;j++){
     if(numbers[i]>numbers[j]){
      temp=numbers[i];
      numbers[i]=numbers[j];
      numbers[j]=temp;
     }
 }
}
console.log(numbers);
console.log("second Largest",numbers[1]);
console.log("second smallest",numbers[8]);