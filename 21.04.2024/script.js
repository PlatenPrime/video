





function sum(numbers) {

    numbers
    .sort((a, b) => a - b)

    return numbers[0] + numbers[1]

}
















function sum(numbers) {

    return numbers
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((a, b) => a + b, 0)
}








function sum(numbers, n) {

    return numbers
        .sort((a, b) => a - b)
        .slice(0, n)
        .reduce((a, b) => a + b, 0)

}

