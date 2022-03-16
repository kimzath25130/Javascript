function capToFront(params) {
    const words = params.split("");
    var word = "";
    for(let index = 0; index < words.length; index++) {
        var wordinput = words[index]
        if (words[index] == wordinput.toUpperCase()) {
            word += words[index];
        }
    }
    for(let index = 0; index < words.length; index++) {
        var wordinput = words[index]
        if (words[index] == wordinput.toLowerCase()) {
            word += words[index];
        }
    }
    console.log(word);
}
capToFront("hApPy");
capToFront("moveMENT");
capToFront("shOrtCAKE");