$(document).ready(function() {
  var submitBtn = $("#submitBtn");
  submitBtn.on('click', validateForm);
  //Another way of doing the same thing
  // submitBtn.on('click', function() {
  //   validateForm();
  // })
  // Another way of doing the same thing
  // submitBtn.click(validateForm);

  function validateForm() {
      var nameInputField = $("#name");
      var emailInputField = $("#email");
      var radioCheckboxMr = $("#title_1");
      var radioCheckboxMiss = $("#title_2");
      var checkBoxValid = true;
      var inputFieldValid = true;
      var emailFieldValid = true;

      if (radioCheckboxMr.is(":checked") === false && radioCheckboxMiss.
        is(":checked") === false) {
        alert("pls check a radio box");
        checkBoxValid = false;
      }
      if (nameInputField.val() === "") {
        nameInputField.css("border", "3px solid red");
        inputFieldValid = false;
      }
      if (emailInputField.val() == "") {
        emailInputField.css("border","3px solid red");
        emailFieldValid = false; 
      }
       if (checkBoxValid && inputFieldValid && emailFieldValid) {
        return true;
       } else {
        return false;
       }
  }
  
 });