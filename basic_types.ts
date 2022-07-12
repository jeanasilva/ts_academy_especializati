// NUMBERS
let name_var: number;
name_var = 1.2;
name_var = 0xFA;
// name_var = 'agora sou uma string';
console.log(name_var);

// booleano
let ative: boolean = true

// string
let firstName:string = 'Jean'
let lastName:string  = 'Silva'
let fullName:string  = `${firstName} ${lastName}`

console.log(fullName)

// Enums
enum ROLES {
    MANAGER = 'Manager',
    ADMIN   = 'Admin',
    CEO     = 'CEO',
    CTO     = 'CTO'
};

function setRole(role: ROLES): void {

}
setRole(ROLES.CEO);

// arrays

let names: string[] = [
    'Jean',
    'Silva',
    'Jorge'
]

let names1: number[] = [
    1
]
