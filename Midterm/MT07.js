function sumTwoSmallestNums(params){
    var num = Math.max.apply(null,params),num2 = Math.max.apply(null,params);
    var dow = Math.max.apply(null,params);
    for(let index = 0; index < params.length; index++){
        if(num >= params[index] && params[index] > 0) {
            num = params[index];
        }
    }

    for (let index = 0; index < params.length; index++) {
        if(num2 >= params[index] && params[index] > 0){
            if (params[index] != num) {
                num2 = params[index];    
            }
        }
    }
    console.log(num + num2);
    console.log("////"+dow);
}
sumTwoSmallestNums([19,5,42,2,77]);
sumTwoSmallestNums([10,343445353,3453445,3453545353453]);
sumTwoSmallestNums([2,9,6,-1]);
sumTwoSmallestNums([879,953,694,-847,942,221,-91,-723,791,-587]);
sumTwoSmallestNums([3689,2902,3951,-475,1617,-2385]);