const cat = {
    name: "Pipey",
    age: 8,
    whatName(){
        return this.name;
    },
};

console.log(cat.whatName());
// Output: Pipey
cat.name = "Nezzar";
console.log(cat.whatName());
/* START */

// How can you represent real-world objects in code?
// They have associated attributes = object PROPERTIES
// They have associated actions = object METHODS
// They have associated context  = "this"

// First:
// Let's define a simple object (with no properties or methode)
const blank = {};
console.log("Blank type:",typeof blank);
console.log("Blank value",blank);

/*
// Next:
// Let's define and object with PROPERTIES (arrtibutes)
// Objects are just a collection of name-value pairs
// separated by commas
const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false
} 
*/