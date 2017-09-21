$(document).ready(function() {
  //We create a variable to hold the last position
  var remember;
  //Everytime a form input is focused, the var changes
  $(".form-control").focus(function() {
    console.log($(this));
    //We access the element's id
    remember = $(this).attr("id");
  });
  //If the user resizes the window
  $(window).resize(function() {
    goTo(remember);
  });
});

function goTo(remember) {
  //If remember is something
  if (remember) {
    //We format the var
    var id = "#" + remember;
  console.log(id);
console.log($(id).offset().top)
    //We go to the element
    $("html, body").animate({
      scrollTop: $(id).offset().top - 100
    }, 0);
    //We focus that element
    $(id).focus();
  }
}
