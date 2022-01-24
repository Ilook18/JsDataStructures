const prompt=require("prompt-sync")();
var number1=0;
var number2=0;
var number3=0;
number1=prompt("Enter the 1st number = ");
number2=prompt("Enter the 2nd number = ");
number3=prompt("Enter the 3rd number = ");
console.log("1st Number = ",number1);
console.log("2nd Number = ",number2);
console.log("3rd Number = ",number3);
number1=parseInt(number1);
number2=parseInt(number2);
number3=parseInt(number3);
var i=0;
var array=new Array(i);
if((number1+number2+number3)==0){
 array[i]=(number1+number2+number3);
 console.log(array);
}else{
console.log("Not equals to zero");
}




