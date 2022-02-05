function equation(num){
    const words = num.split(" ");
    let number = "";
    let sum = 0;
    for (let index = 0; index < words.length; index++) {
        if (words[index] == "one"){
            number += "1";
        }else if(words[index] == "two"){
            number += "2";
        }else if(words[index] == "three"){
            number += "3";
        }else if(words[index] == "four"){
            number += "4";
        }else if(words[index] == "five"){
            number += "5";
        }else if(words[index] == "six"){
            number += "6";
        }else if(words[index] == "seven"){
            number += "7";
        }else if(words[index] == "eight"){
            number += "8";
        }else if(words[index] == "nine"){
            number += "9";
        }else if(words[index] == "+"){
            number += "+";
        }else if(words[index] == "-"){
            number += "-";
        }else if(words[index] == "*"){
            number += "*";
        }
    }
    sum = eval(number);
    return sum;
}

console.log(equation("one + one"));
console.log(equation("seven * four - two"));
console.log(equation("one + one + one + one + one"));

