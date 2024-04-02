
  function redirectOnChange() {
    let select = document.getElementById("select1");
    let selectedOption = select.value;

    if (selectedOption === 'LogIn') {
        window.location.href = "./login/index.html";
    } else if (selectedOption === 'SignUp') {
        window.location.href = "./signup/index.html";
    }
}