$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#user").children("li").first().click(function() {
      alert("hi!");
      $(this).remove();
    });

    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#webpage").children("li").first().click(function() {
      alert("hi!");
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#user").children("li").first().click(function() {
      alert("Peace!");
      $(this).remove();
    });
    $("ul#webpage").prepend("<li>See ya later!</li>");
    $("ul#webpage").children("li").first().click(function() {
      alert("Peace!");
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#user").children("li").first().click(function() {
      alert("You stink!");
      $(this).remove();
    });
    $("ul#webpage").prepend("<li>Pardon. I meant no offense. Or did I?</li>");
    $("ul#webpage").children("li").first().click(function() {
      alert("You Suck.");
      $(this).remove();
    });
  });
});
