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

  var n;
  n = ran(n);

function ran(n) {
    n = Math.floor(Math.random() *70 + 1);
    if (n < 60) {
      n = ran(n);
    }
    return n;
  }

  console.log(num+" "+n);
  if (words[1] == undefined) {
    console.log("..ไม่พบค่า")
  }else{
    console.log(".."+words[1]);
  }
}
highestDigit(379);
highestDigit(2);
highestDigit(377401);
