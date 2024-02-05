function findSmallestLength(arr) {
    if (arr.length === 0) {
        return null;
    }
    let smallestElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        smallestElement = arr[i];

    }
    return smallestElement;
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const implementFunction = findSmallestLength(heights2);
console.log(implementFunction);