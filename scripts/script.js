$(document).ready(function() {
  var flag = 0;
  //We create a variable to hold the last position
  var remember;
  //Everytime a form input is focused, the var changes
  $(".form-control, .form-check-input").focus(function() {
    console.log($(this));
    //We access the element's id
    remember = $(this).attr("id");
  });
  //If the user resizes the window
  $(window).resize(function() {
    goTo(remember);
  });

  $("#button").click(function() {

    if (flag == 0) {
      $("textarea").css({
        "height": "150px"
      });
      $(".form-check-input").css({
        "width": "20px",
        "height": "20px"
      });
      $(".form, label").css({
        "font-size": "25px"
      });
      flag = 1;
    } else {
      $("textarea").css({
        "height": "58px"
      });
      $(".form-check-input").css({
        "width": "13px",
        "height": "13px"
      });
      $(".form, label").css({
        "font-size": "16px"
      });
      flag = 0;
    }
  });
});

function goTo(remember) {
  //If remember is something
  if (remember) {
    //We format the var
    var id = "#" + remember;
    console.log(id);
    console.log($(id).offset().top);
    //We go to the element
    $("html, body").animate({
      scrollTop: $(id).offset().top - 100
    }, 0);
    //We focus that element
    $(id).focus();
  }
}
