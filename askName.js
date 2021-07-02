const str =prompt("Hello, What is your Name?");
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
document.write("<h2>Welcome to This Scholarship " + str2 + "</h2>");


