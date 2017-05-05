//BS logic
var pong = function() {
  var input = parseInt($("input#pingpong").val());
  var ping = [];
  for (var index = 1; index <= input; index += 1) {
    ping.push(index);
    $("ul#output").append("<li>" +index + "</li>");
    if (index % 3 === 0) {
      $("ul#output").append("<li>" + "Ping" + "</li>");
    } else if (index % 5 === 0) {
      $("ul#output").append("<li>" + "Pong" + "</li>");
    } else if (index % 15 === 0) {
      $("ul#output").append("<li>" + "PingPong" + "</li>");
    }
  };
};
//UI logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    pong();
  });
});
