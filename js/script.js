function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var Y = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  elseif (Y == "") {
    alert("email must be filled out");
    return false;
  }
}