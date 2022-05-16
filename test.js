let U = {
    name : "kim",
    num : 2 
};

function getBudgets(params) {
    var t = 0;
    t = params[0].budget+params[1].budget+params[2].budget;
    return t;
}

console.log(U.name);
console.log(getBudgets([
    {name: 'John',  age: 21, budget: 23000}, 
    {name: 'Steve',  age: 32, budget: 40000}, 
    {name: 'Martin',  age: 16, budget: 2700}]));

console.log(getBudgets([
    {name: 'John',  age: 21, budget: 29000},
    {name: 'Steve',  age: 32, budget: 32000}, 
    {name: 'Martin',  age: 16, budget: 1600}])); 
