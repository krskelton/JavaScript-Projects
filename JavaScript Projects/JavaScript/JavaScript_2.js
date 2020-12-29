function validateForm() { //check that each field in the form was filled out
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var message = document.forms["myForm"]["message"].value;

    if (fname == "") {
      alert("First name must be filled out");
      return false;
    }
    if (lname == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }
}