function findAveragePhonePrice(arrays) {
    let sum = 0;
    let arrayLength = arrays.length;
    let average = 0;
    for (let i = 0; i < arrays.length; i++) {
        const element = arrays[i].price;
        sum += element;
    }
    average = sum / arrayLength;
    return average;
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
console.log(findAveragePhonePrice(phones));