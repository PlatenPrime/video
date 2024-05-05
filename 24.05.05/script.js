

 //PUSH

 const myArrayPush = [1, 2, 3];

 myArrayPush.push(4);
 console.log(myArrayPush);
 // [1, 2, 3, 4]

 myArrayPush.push(5, 6);
 console.log(myArrayPush);
 // [1, 2, 3, 4, 5, 6]










// UNSHIFT

const myArrayUnshift = [4, 5, 6];

myArrayUnshift.unshift(3);
console.log(myArrayUnshift);
// [3, 4, 5, 6]
myArrayUnshift.unshift(1, 2);
console.log(myArrayUnshift);
// [1, 2, 3, 4, 5, 6]










 // CONCAT

 const myArrayConcat = [1, 2, 3];
 const myArrayConcat2 = [4, 5, 6];

 const myArrayConcat3 = 
 myArrayConcat.concat(myArrayConcat2);

 console.log(myArrayConcat3);
 // [1, 2, 3, 4, 5, 6]












 // SPREAD

 const myArraySpread = [1, 2, 3];

 const myArraySpread2 = 
[...myArraySpread, 4, 5, 6];

 console.log(myArraySpread2);
 // [1, 2, 3, 4, 5, 6]











// SPLICE

const myArraySplice = [1, 2, 3, 4, 5, 6];

myArraySplice.splice(2, 0, "a", "b");
console.log(myArraySplice);
// [1, 2, "a", "b", 3, 4, 5, 6] 

myArraySplice.splice(5, 2);
console.log(myArraySplice);
// [1, 2, "a", "b", 3, 6]












 // LENGTH

 const myArrayLength = [1, 2, 3]; 
 console.log(myArrayLength.length); 
 // 3
 myArrayLength[myArrayLength.length] = 4; 
 console.log(myArrayLength); 
 // [1, 2, 3, 4]
 console.log(myArrayLength.length); 
  // 4 













 // INDEX


 const myArrayIndex = [1, 2, 3]; 
 myArrayIndex[3] = 4; 
 console.log(myArrayIndex);
 // [1, 2, 3, 4]
 myArrayIndex[9] = 10;
 console.log(myArrayIndex);
 // [1, 2, 3, 4, , , , , , 10]
