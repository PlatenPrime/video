function rot13(str) {
    return str.replace(/[a-zA-Z]/g,
     function(char) {
      let code = char.charCodeAt(0);
      let shift = code <= 90 ? 65 : 97;
      return String.fromCharCode(((code - shift + 13) % 26) + shift);
    });
  }
  
  // Приклад
  console.log(rot13("p World!")); // На виході: "Uryyb Jbeyq!"