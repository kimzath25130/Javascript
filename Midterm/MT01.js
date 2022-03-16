function numberSplint(number) {
    var num;
    num = number/2;
    if (number%2 != 0) {
        console.log("["+(num-0.5)+", "+(num+0.5)+"]");
    }else if (number%2 == 0) {
        console.log("["+num+", "+num+"]");
    }
}
numberSplint(4);
numberSplint(10);
numberSplint(11);
numberSplint(-9);