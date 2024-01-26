
  const form = document.querySelector("form");
  const nameInput = form.querySelector("#Name");
  const emailInput = form.querySelector("#Email");
  const passwordInput = form.querySelector("#Password"); // Corrected selector here

  form.addEventListener("submit", formHandler);

  function formHandler(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    // console.log(emailInput.value);
    // console.log(passwordInput.value);
    // for backend
    const userinfo = {
      name : nameInput.value,
      email : emailInput.value,
      password : passwordInput.value,

    };
    console.log(userinfo);
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }
 
