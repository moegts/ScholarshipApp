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

alert("Welcome to the Scholarship of Software Development page!")

var x = prompt("what program language you like the most Python, Javascript OR C++?")
var xx = x.toLowerCase();

while (xx != "python" && xx != "py" && xx != "javascript" && xx != "js" && xx != "c++")
{xx =prompt("please type the program you want (Python or Py ,Javascript or Js ,C++)")}

var y = prompt("How many Copys you want of " + xx + "? ")

while(y > 10)

{y = prompt("How many " + xx + " you want? (Please put number between [1 ,10] ")}

for(var i=1;i<=y ;i++ ){

  if(xx =="python" ){
 document.write("<h3>"+ i + " of Python"+ "</h3>" + "<img src='photos/py.jpg' alt='python'>")
 }
  if(xx =="py" ){
 document.write("<h3>"+ i + " of Python"+ "</h3>" + "<img src='photos/py.jpg' alt='python'>")
 }
  if(xx =="javascript" ){
 document.write("<h3>"+ i + " of Javascript"+ "</h3>" + "<img src='photos/js.jpg' alt='javascript'>")
 }
  if(xx =="js" ){
 document.write("<h3>"+ i + " of Javascript"+ "</h3>" + "<img src='photos/js.jpg' alt='javascript'>")
 }
  if(xx =="c++" ){
 document.write("<h3>"+ i + " of C++"+ "</h3>" + "<img src='photos/cpp.jpg' alt='c++'>")
 }
 
}

