function myFunction() {
  var a = document.getElementById("mais");
  console.log(a);
  if (a.style.display == "none") {
    // console.log(a.style.display);
    a.style.display = "block";
    // console.log(a.style.display);
  } else {
    // console.log(a.style.display);
    a.style.display = "none";
    // console.log(a.style.display);
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $("#nav").css("background", "#9491915f");
    } else {
      $(".black").css("background", "black");
    }
  });
});

var preload = document.getElementById("preloader");
function preloader() {
  preload.style.display = "none";
  console.log(preload);
}
