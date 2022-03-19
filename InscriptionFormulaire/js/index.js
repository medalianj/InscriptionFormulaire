class User {
    familyName;
    firstName;
    age;
    gender;
    login;
    password;
    confirmPassword;
    country;
    email;
    agreeWith;
}

class Validation {
    static isValid(user) {

    }
}

var user = new User();
var valid = false;


 function submitForm(event){
    event.preventDefault();
    window.history.back();
  }

  document.querySelectorAll('.input-validated[data-error] .input')
  .forEach(inpEl => {
      inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
  });

//Validation.isValid(user);

