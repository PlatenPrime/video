const arr = [1, 2, 3, 4, 5]
console.log(...arr)





const firstName = 'Platen'

lastName = 'Prime'

console.log(
`hello ${firstName}, 
nice to meet you`
);




const usernameRegex = /^[a-z0-9_]{4,16}$/;

function validateUsername(username) {
  return usernameRegex.test(username);
}

// Приклад використання
console.log(validateUsername("user_name123")); 
// true
console.log(validateUsername("UserName"));     
// false (верхній регістр не дозволений)
console.log(validateUsername("user"));         
// false (занадто коротке)
console.log(validateUsername("username_too_long123")); 
// false (занадто довге)
