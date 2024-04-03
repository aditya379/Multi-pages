let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#signUp");
let forgot = document.querySelector("#forgot");

// Add event listener for the Enter key press
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    signUp();
  }
});

// Add event listener for the sign-up button click
button.addEventListener("click", signUp);

// Function to handle the sign-up process
function signUp() {
  let namevalue = username.value;
  let emailvalue = email.value;
  let passvalue = password.value;

  if (
    namevalue.trim() !== "" &&
    emailvalue.trim() !== "" &&
    passvalue.trim() !== ""
  ) {
    let emailExists = localStorage.getItem("Email") === emailvalue;
    if (emailExists) {
      alert("This email is already registered.");
      return;
    }

    let confirmMsg = confirm("Do you want to sign up?");
    if (confirmMsg) {
      localStorage.setItem("UserName", namevalue);
      localStorage.setItem("Email", emailvalue);
      localStorage.setItem("Password", passvalue);
      alert("Sign Up Successful");
      username.value = "";
      email.value = "";
      password.value = "";
      setTimeout(() => {
        window.location.href = "../login/index.html";
      },2000);
    } else {
      alert("Sign Up Cancelled");
    }
  } else {
    alert("Please fill in all the inputs");
  }
}
