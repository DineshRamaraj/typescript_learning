function addTwo(num: number) : number {
    return num + 2;
//   return "hello";
}

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("dinesh");

function signUpUser(name: string, email: string, isPaid: boolean) {}

// signUpUser(1, 2, 3); // Default any

signUpUser("dinesh", "dineshramar.26@gmail.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("h", "h@h.com");



// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }

// getValue(10);

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

// heros.map((hero: string) => {
//     return `hero is ${hero}`;
// })

heros.map((hero): string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): void{
    console.log(errmsg);
}

export default addTwo;
