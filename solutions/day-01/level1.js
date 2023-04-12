console.log('Hello, World!')

//Declare an empty array
let newArray = Array();
//Declare an array with more than 5 number of elements and find the legth.
let numbersArray = [1,2,3,10,4,5,6];
console.log(numbersArray.length);
//Get the first item, the middle item and the last item of the array
const firstItem = numbersArray.shift() 
console.log(firstItem) // 1
console.log(numbersArray[Math.round((numbersArray.length)/2)-1]);//10
console.log(numbersArray[numbersArray.length-1]);//6
