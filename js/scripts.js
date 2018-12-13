// Function to make the dice pick random numbers
var iRandom;
var iRoll= {};
var i;

iRol = prompt ("Roll the dice", 6);

for (i=1; i<=iRoll; i++){
  iRandom = Math.cel (Math.random()*6);
  document.writeIn(iRandom);
}
