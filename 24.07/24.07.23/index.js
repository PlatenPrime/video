function mix(s1, s2) {
    // your code

    let obj1 = new Map()
    let obj2 = new Map()

    s1.split("")
        .filter(el => el !== " " || el !== el.toLowerCase())
        .forEach(el => {
            if (obj1.has(el)) {
                obj1[el] += 1
            } else {
                obj1[el] = 1
            }
        }
        )

    s2.split("")
        .filter(el => el !== " " || el !== el.toLowerCase())
        .forEach(el => {
            if (obj2.has(el)) {
                obj2[el] += 1
            } else {
                obj2[el] = 1
            }
        }
        )


    console.log(obj1);
    console.log(obj2);


}

console.log(mix("Are they here", "yes, they are here"));


console.log("Works!");
