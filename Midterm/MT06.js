function removeDups(params){
    console.log(...new Set(params));
}
removeDups([1,0,1,0]);
removeDups(["The","big","cat"]);
removeDups(["John","Taylor","John"]);