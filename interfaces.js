var getUser = function (user) {
    return "".concat(user.firstName, " ").concat(user.lastName, ", age: ").concat(user.age);
};
var user = {
    firstName: 'Jean',
    lastName: 'Silva',
    age: 29
};
// console.log(getUser(user))
var Person = /** @class */ (function () {
    function Person(firstN, lastN, ageU) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = ageU;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.age);
    };
    return Person;
}());
var person = new Person('Jean', 'Silva', 29);
console.log(getUser(person));
// export { User }
