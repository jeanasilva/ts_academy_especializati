const add = (a: number, b: number): number => a + b

// 

const addWithOptionalTax = function(a: number, b: number, tax?: number): number {
    if (typeof tax != 'undefined') {
        return (a + b) - tax
    }
        return (a + b)
    
}

const applyDiscount = (price: number, percentage: number = 5): number => {
    return price - (price * (percentage / 100))
}

const calcTotal = (...numbers: number[]): number => {
    let total = 0;
    numbers.forEach(num => {
        return total += num;
    })
    return total;
}

console.log(calcTotal(2,3,5,10))

// console.log(applyDiscount(100))
// console.log(addWithOptionalTax(2,2,1));
// console.log(addWithOptionalTax(2,2));
// console.log(add(2,2))