$(document).ready(function() {
$("#button").click(
  function myRandom(){
   var randomNumber= Math.ceil (Math.random() * (6 - 1 + 1));

   document.getElementById("output").innerHTML=randomNumber
})
})

//
// var upperDiceRoll = 6;
// var lowerDiceRoll = 1;
//
// var myRandom = Math.ceil (Math.random() * (upperDiceRoll - lowerDiceRoll + 1));
//
// myRandom.addEventListener("click", function(){
//   myRandom.textContent
// });
//  //
 // })
 //
 //  random.addEventListener('onclick',function(){
 //    document.getElementsByClassName()
