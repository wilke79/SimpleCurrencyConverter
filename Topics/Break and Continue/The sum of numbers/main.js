function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        sum += numbers[i];
    }
    return sum;
}