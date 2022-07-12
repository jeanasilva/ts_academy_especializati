class User {
    public firstName: string;
    public lastName: string;
    public age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age;
    }

    public getFullName(){
        return `${this.firstName} ${this.lastName} + ${this.age}`;
    }
}

class Admin extends User {

    public getFullName(){
        return `Dr. ${this.firstName} ${this.lastName} + ${this.age}`;
    }

}

let admin = new Admin('Jean', 'Silva', 29);
console.log(admin.getFullName())


// let user = new User('Jean', 'Silva', 29);
// // let fullName = new 
// // user.firstName = 'Change Name';
// console.log(user.getFullName());

