var add = function (a, b) { return a + b; };
// 
var addWithOptionalTax = function (a, b, tax) {
    if (typeof tax != 'undefined') {
        return (a + b) - tax;
    }
    return (a + b);
};
var applyDiscount = function (price, percentage) {
    if (percentage === void 0) { percentage = 5; }
    return price - (price * (percentage / 100));
};
var calcTotal = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) {
        return total += num;
    });
    return total;
};
console.log(calcTotal(2, 3, 5, 10));
// console.log(applyDiscount(100))
// console.log(addWithOptionalTax(2,2,1));
// console.log(addWithOptionalTax(2,2));
// console.log(add(2,2))
