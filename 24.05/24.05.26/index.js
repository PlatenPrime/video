let prime = { 
    name : "ABC", 
    printFunc: function() { 
        console.log(this.name);
    } 
 }
 
 let printFunc2 = prime.printFunc;
 
 printFunc2(); 



