let data = 7
while (data >= 0) {
    if (data <= 5) {
        data--;
        continue;
    }
    console.log(data);
    data--;
}




for (let i = 1; ; i++) {
    let data = i * 5;
    console.log(data)
    if (data >= 30) break;
}







function rowWeights(array) {
    return array.reduce((acc, curr, index) => {
        acc[index % 2] += curr;
        return acc;
    }, [0, 0]);
}