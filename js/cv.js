$(window).on("load", function () {
  $("section").css("visibility", "visible");
  $("section").css("display", "none");
  $("section").fadeIn(2100);
});

$(document).ready(function () {
  "use strict";

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar,#content,.navbar").toggleClass("active");
  });

  $("a.scrollTrigger1").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      1500
    );
  });

  $("a.scrollTrigger2").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#education").offset().top,
      },
      1500
    );
  });

  $("a.scrollTrigger3").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top,
      },
      1500
    );
  });

  $("a.scrollTrigger4").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#proexperience").offset().top,
      },
      1500
    );
  });

  $("a.scrollTrigger5").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#infocompetence").offset().top,
      },
      1500
    );
  });

  $("a.scrollTrigger6").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#language").offset().top,
      },
      1500
    );
  });
})(jQuery);
