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

  $("button#cat-meow").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Arf!</li>");

    });

  $("button#cat-hiss").click(function() {
    $("ul#cat").append("<li>Hiss</li>");
    $("ul#dog").append("<li>Woof!</li>");

    });


    $("button#dog-arf").click(function() {
      $("ul#cat").before("<li>Meow</li>");
      $("ul#dog").before("<li>Arf!</li>");

      });

    $("button#dog-woof").click(function() {
      $("ul#cat").after("<li>Hiss</li>");
      $("ul#dog").after("<li>Woof!</li>");

      });



});
