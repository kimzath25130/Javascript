/*let num = prompt("Enter you number : ");
console.log("Hi "+num);
let num2 = (Math.floor(Math.random()*100));
document.getElementById("num2").innerHTML = num2;
if (num == num2) {
    alert("คุณถูกรางวัล");
}else if(num != num2){
    alert("คุณไม่ถูกรางวัล");
}*/

let age = prompt("Enter your age : ");
if (age > 13) {
    document.getElementById("scarry").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/YqgXVgRn_UI?start=249\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}