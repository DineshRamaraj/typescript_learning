"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //   return "hello";
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("dinesh");
function signUpUser(name, email, isPaid) { }
// signUpUser(1, 2, 3); // Default any
signUpUser("dinesh", "dineshramar.26@gmail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@h.com");
// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }
// getValue(10);
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
// heros.map((hero: string) => {
//     return `hero is ${hero}`;
// })
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    console.log(errmsg);
}
exports.default = addTwo;
