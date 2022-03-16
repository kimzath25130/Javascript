function totalVolume(num1,num2,num3,num4){
    var number1 = 1,number2 = 1,number3 = 1,number4 = 1;
    for (let index = 0; index < num1.length; index++) {
        number1 *= num1[index];
        if(typeof num2 !== "undefined"){
            number2 *= num2[index];   
        }if(typeof num3 !== "undefined"){
            number3 *= num3[index];
        }if(typeof num4 !== "undefined"){
            number4 *= num4[index];
        }if(typeof num2 == "undefined"){
            number2 = 0;    
        }if(typeof num3 == "undefined"){   
            number3 = 0;
        }if(typeof num3 == "undefined"){   
            number4 = 0;
        }
    }
    console.log(number1+number2+number3+number4);
}

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
totalVolume([2, 2, 2], [2, 1, 1]);
totalVolume([1, 1, 1]);

