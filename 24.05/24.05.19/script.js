// const str1="Platen" 
// const str2="Prime"
// const str3=str1.concat(str2) 
// console.log(str3)







const str1="PlatenPrime" 
const str2 = str1.slice(2,5) 
console.log(str2)





function swapAB(input) {
    return input.replace(/a|b/g, 
    char => char === 'a' ? 'b' : 'a');
  }
  
  // Приклади використання:
  console.log(swapAB('acb')); 
  // 'bca'
  console.log(swapAB('aabacbaa')); 
  // 'bbabcabb'