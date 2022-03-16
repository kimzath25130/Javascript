function digitalClock(time) {
    var Telltime = '"';
    var numhoue = 0,numminute = 0,numsecond;
    for (let index = 60; index <= time; index) {
        if (index <= time){
            numminute++
            time -= 60;   
        }if (numminute == 60){
            numhoue++
            numminute -= 60;
        }
    }
    if (numhoue >= 24) {
        numhoue = 0;
    }
    numsecond = time;
    if (numhoue < 10) {
        Telltime += "0";
    }
    Telltime += numhoue+":";
    if (numminute < 10) {
        Telltime += "0";
    }
    Telltime += numminute+":";
    if (numsecond < 10) {
        Telltime += "0";
    }
    Telltime += numsecond+'"';
    console.log(Telltime);
}
digitalClock(5025);
digitalClock(61201);
digitalClock(87000);