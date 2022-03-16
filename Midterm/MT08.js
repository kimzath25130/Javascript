function simplePair(Arraynum,num2) {
    var exam = "";
    for (let index = 0; index < Arraynum.length-1; index++) {
        for (let index2 = 1; index2 < Arraynum.length; index2++) {
            if (Arraynum[index] * Arraynum[index2] == num2) {
                exam = "["+Arraynum[index]+","+Arraynum[index2]+"]";
            }else if(exam == ""){
                exam = "null";
            }
        }
    }
    console.log(exam);
}
simplePair([1,2,3],3);
simplePair([1,2,3],6);
simplePair([1,2,3],9);