interface UserInterface {
    firstName: string;
    lastName: string;
    age: number;

    getFullName(name: string): string;
}

const getUser = (user: UserInterface): string => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`;
}

let user = {
    firstName: 'Jean',
    lastName: 'Silva',
    age:    29,
}

// console.log(getUser(user))

class Person implements UserInterface {

    firstName: string;
    lastName: string;
    age: number;

    constructor(firstN: string, lastN: string, ageU: number) {
        this.firstName = firstN;
        this.lastName  = lastN;
        this.age       = ageU;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName} ${this.age}`
    }

}

let person = new Person('Jean', 'Silva', 29);
console.log(getUser(person))

// export { User }