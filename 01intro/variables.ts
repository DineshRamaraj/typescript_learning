// string
let greetings: string = "Hello Dineshkumar";

greetings.toUpperCase();   // ✅ valid, since greetings is a string

// greetings = 6;          // ❌ Error: Type 'number' is not assignable to type 'string'
greetings = "6";           // ✅ valid, "6" is still a string
console.log(greetings);  

// number
let userId = 43453.6;      // inferred type: number
userId.toFixed();          // ✅ valid (method exists on number)

// userId = "Dinesh";       // ❌ Error: Type 'string' is not assignable to type 'number'

// boolean
let isLoggedIn : boolean = false;  // ✅ valid
