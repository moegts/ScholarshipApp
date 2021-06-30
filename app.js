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