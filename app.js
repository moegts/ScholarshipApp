var test = prompt("Security test: what is 2+3= ?")
console.log(test)
if(test == "5")
{
  alert("you are not a bot!")
}
else if (test!= "")
{
  alert("you are bot! I will send you to ask Google :)")
  location.replace("https://www.Google.com")
}
else{
  alert("you are bot! I will send you to ask Google :)")
  location.replace("https://www.Google.com")
}

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzx //
// i want to ask the user what mode you want the page to be on dark or light mode
// for collors etc
// ask him
// make his answer lowercase
// check his answer if corect dark change the CSS to darkmode and alert him that you are using the darkmode site
// check his answer if corect light do nothing but alert him that you using the lightmode site
// if he enter other answer repeat so we will use loop here

// var a = "yes"
// var b = "no"
// var answer = prompt("Yes or No?")
// var answerLower = answer.toLowerCase();
// while(answer != a){
//   answer= prompt("try again wrong answer")
// }
// alert("you guss it right you said yes")

// var strs = "on";
// var str = "On";
// var res = str.toLowerCase();
// while(res == strs){
// res= alert("good")
// }
// //-----------------------------------------------------------------//
alert("Welcome to the Scholarship of Software Development page!")

var x = prompt("what program language you like the most Python, Javascript OR C++?")
var zz = x.toLowerCase();

while (zz != "python" && zz != "py" && zz != "javascript" && zz != "js" && zz != "c++")
{zz =prompt("please type the program you want (Python or Py ,Javascript or Js ,C++)")}

var y = prompt("How many Copys you want of " + zz + "? ")

while(y > 10)

{y = prompt("How many " + zz + " you want? (Please put number between [1 ,10] ")}

for(var i=1;i<=y ;i++ ){

  if(zz =="python" ){
 document.write("<h3>"+ i + " of Python"+ "</h3>" + "<img src='photos/py.jpg' alt='python'>")
 }
  if(zz =="py" ){
 document.write("<h3>"+ i + " of Python"+ "</h3>" + "<img src='photos/py.jpg' alt='python'>")
 }
  if(zz =="javascript" ){
 document.write("<h3>"+ i + " of Javascript"+ "</h3>" + "<img src='photos/js.jpg' alt='javascript'>")
 }
  if(zz =="js" ){
 document.write("<h3>"+ i + " of Javascript"+ "</h3>" + "<img src='photos/js.jpg' alt='javascript'>")
 }
  if(zz =="c++" ){
 document.write("<h3>"+ i + " of C++"+ "</h3>" + "<img src='photos/cpp.jpg' alt='cpp'>")
 }
 
}


function Num2(){
var num2= prompt("enter how much of pepsi you want?(5)");
var zz=false;
while(zz==false) {
if(num2<1 ){
zz=false;
num2=prompt("enter how much of pepsi you want?(5)");
}
else if(num2>5) {
zz=false;
num2=prompt("Enter a number between 1-5");
}
else
zz=true;

}
return num2;
}
