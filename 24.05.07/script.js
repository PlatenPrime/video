





function maxAbsLengthDifference(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }

    let maxDifference = -1;

    for (let x of a1) {
        for (let y of a2) {
            const difference = Math.abs(x.length - y.length);
            maxDifference = Math.max(maxDifference, difference);
        }
    }

    return maxDifference;
}




const a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];


console.log(maxAbsLengthDifference(a1, a2)); // Output: 13
