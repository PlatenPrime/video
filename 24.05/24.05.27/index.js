var prime1 = { name: "ABC", article: "C++" }
var prime2 = { name: "CDE", article: "JAVA" }
var prime3 = { name: "IJK", article: "C#" }

function printVal() {
    document.write(
        this.name + " contributes about "
        + this.article + "<br>"
    );
}

var printFunc2 = printVal.bind(prime1);
printFunc2();
var printFunc3 = printVal.bind(prime2);
printFunc3();
var printFunc4 = printVal.bind(prime3);
printFunc4(); 