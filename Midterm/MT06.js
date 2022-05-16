function removeDups(params){
    var ll = "";
    for (let index = 0; index < params.length; index++) {
        for (let dex = 1; dex < params.length; dex++) {
            if (index != dex) {
                if (params[index] == params[dex]) {
                    params[dex] = "ET";
                }
            }
        }
        if (params[index] != "ET") {
            ll += params[index] + "  "; 
        }
    }

    console.log(ll);
}
removeDups([1,0,1,0]);
removeDups(["The","big","cat"]);
removeDups(["John","Taylor","John"]);