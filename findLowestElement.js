function findLowest(arr) {
    let lowestElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < lowestElement) {
            lowestElement = element;
        }
    }
    return lowestElement;
}
const heights2 = [167, 190, 120, 165, 137];
const implementFunction = findLowest(heights2);
console.log(implementFunction);
