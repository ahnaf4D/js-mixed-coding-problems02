function calculateElectronicsBudget(laptop, tablets, mobile) {
    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;
    // calculation below
    let laptopCalculation = laptopPrice * laptop;
    let tableCalculation = laptopPrice * tablets;
    let mobileCalculation = mobilePrice * mobile;
    const totalCost = laptopCalculation + tableCalculation + mobileCalculation;
    return `Total bill is ${totalCost}`;
}
const result = calculateElectronicsBudget(6,4,2);
console.log(result);