
alert("Welcome to the Scholarship of Software Development page!")

var x = prompt("what program language you like the most Python, Javascript OR C++?")

var xx = x.toLowerCase();

while (xx != "python" && xx != "py" && xx != "javascript" && xx != "js" && xx != "c++") { xx = prompt("please type the program you want (Python or py ,Javascript or js ,C++)") }

var y = prompt("How many Copys you want of " + xx + "? ")

while (y > 10) { y = prompt("How many Copys from" + xx + " you want? (Please put number between [1 ,10] ") }

for (var i = 1; i <= y; i++) {

  if (xx == "python") {

    document.write("<h3>" + i + " of Python" + "</h3>" + "<img src='photos/py.jpg' alt='python'>")
  }
  if (xx == "py") {

    document.write("<h3>" + i + " of Python" + "</h3>" + "<img src='photos/py.jpg' alt='python'>")
  }
  if (xx == "Javascript") {

    document.write("<h3>" + i + " of Javascript" + "</h3>" + "<img src='photos/js.jpg' alt='Javascript'>")
  }
  if (xx == "js") {

    document.write("<h3>" + i + " of Javascript" + "</h3>" + "<img src='photos/js.jpg' alt='Javascript'>")
  }
  if (xx == "C++") {

    document.write("<h3>" + i + " of C++" + "</h3>" + "<img src='photos/cpp.jpg' alt='C++'>")
  }

}

