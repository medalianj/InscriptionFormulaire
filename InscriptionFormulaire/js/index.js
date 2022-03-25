var validation;
//Making sure DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  //Filling countries combobox
  const selectDrop = document.querySelector("#combo_countries");

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data != null && data != undefined && data.length > 0) {
        data.sort((a, b) => (a?.name?.common > b?.name?.common ? 1 : -1));
        let output = "";
        data.forEach((country) => {
          output += `<option value="${country.name.common}">${country.name.common}</option>`;
          selectDrop.innerHTML = output;
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });

  //Validation
  validation = new window.JustValidate("#form");
  if (!!validation) {
    validation
      //Family name
      .addField("#txt_familyName", [
        {
          rule: "required",
          errorMessage: "The family name is required!",
        },
        {
          rule: "minLength",
          value: 2,
        },
        {
          rule: "maxLength",
          value: 100,
        },
      ])

      //First name
      .addField("#txt_firstName", [
        {
          rule: "required",
          errorMessage: "The first name is required!",
        },
        {
          rule: "minLength",
          value: 2,
        },
        {
          rule: "maxLength",
          value: 100,
        },
      ])

      //Age
      .addField("#txt_age", [
        {
          rule: "required",
          errorMessage: "The age is required!",
        },
        {
          rule: "maxLength",
          value: 3,
        },
        {
          validator: (value) => {
            return Number(value) <= 130;
          },
          errorMessage: "The age should be less than 131!",
        },
      ])

      //Login
      .addField("#txt_login", [
        {
          rule: "required",
          errorMessage: "The login is required!",
        },
      ])

      //Password
      .addField("#txt_pwd", [
        {
          rule: "required",
          errorMessage: "The password is required!",
        },
        {
          rule: "password",
          errorMessage: "The password is not valid!",
        },
      ])

      //Confirm password
      .addField("#txt_confirmPwd", [
        {
          rule: "required",
          errorMessage: "The password confirmation is required!",
        },
        {
          rule: "password",
          errorMessage: "The password is not valid!",
        },
        {
          validator: (value) => {
            let password = document.getElementById("txt_pwd")?.value;
            let confirmedPassword =
              document.getElementById("txt_confirmPwd")?.value;
            return confirmedPassword === password;
          },
          errorMessage: "The password confirmation is not correct!",
        },
      ])

      //Email
      .addField("#txt_email", [
        {
          rule: "required",
          errorMessage: "The email is required!",
        },
        {
          rule: "email",
          errorMessage: "The email is invalid!",
        },
      ]);
  }
});

function subscribe() {
  if (validation.isValid) {
    window.location.href = "./subscribed.html";
  }
}
