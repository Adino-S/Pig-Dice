// Business Logic

var myRandom = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// User Interface
$(document).ready(function() {
  $(".btn-1").click(function() {
    $("#currentCount").val(myRandom);
  })
  $(".btn-2").click(function() {
    $("#computerCount").val(myRandom);
  })
})
