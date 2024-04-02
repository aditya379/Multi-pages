let username = document.querySelector("#username");
let button = document.querySelector("#check");
let update = document.querySelector("#update");

button.addEventListener("click", () => {
  let namevalue = username.value.trim();
  
  if (button.innerHTML === "Check") {
    if (namevalue !== "") {
      let userValue = localStorage.getItem("UserName");
      if (namevalue === userValue) {
        username.placeholder = "New Password";
        update.innerHTML = "Enter Your New Password";
        button.innerHTML = "Submit";
      } else {
        update.innerHTML = "Username not found";
      }
    } else {
      update.innerHTML = "Please enter a username";
    }
  } else if (button.innerHTML === "Submit") {
    let newPassword = username.value.trim();
    if (newPassword !== "") {
      localStorage.setItem("Password", newPassword);
      update.innerHTML = "Password updated successfully!";
      username.value = "";
      button.innerHTML = "Check"; // Reset button text after submitting
    } else {
      update.innerHTML = "Please enter a new password";
    }
  }
});
