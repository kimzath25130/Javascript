function equation(num){
    const words = num.split(" ");
    const number = [];
    let sum = 0;
    for (let index = 0; index < words.length; index++) {
        if (words[index] == "one"){
            number[index] = 1;
        }else if(words[index] == "two"){
            number[index] = 2;
        }else if(words[index] == "three"){
            number[index] = 3;
        }else if(words[index] == "four"){
            number[index] = 4;
        }else if(words[index] == "five"){
            number[index] = 5;
        }else if(words[index] == "six"){
            number[index] = 6;
        }else if(words[index] == "seven"){
            number[index] = 7;
        }else if(words[index] == "eight"){
            number[index] = 8;
        }else if(words[index] == "nine"){
            number[index] = 9;
        }else if(words[index] == "+"){
            number[index] = "+";
        }else if(words[index] == "-"){
            number[index] = "-";
        }else if(words[index] == "*"){
            number[index] = "*";
        }

        let n = 0;
        for (let index = 1; index < number.length; index++){
            if (number[index] == "+") {
            }
            index++
        }
    }
    return sum;
}

let s = equation("one + six + three");
console.log(s);
