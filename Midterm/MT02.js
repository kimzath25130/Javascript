function highestDigit(number) {
    var namenum = number.toString();
    const words = namenum.split("");
    var num = 0;
    for (let index = 0; index < words.length; index++) { 
      var num2 = Math.floor(words[index]);
      if(num <= (num2)){
        num = num2;
      }
    }
    console.log(num);
}
highestDigit(379);
highestDigit(2);
highestDigit(377401);
