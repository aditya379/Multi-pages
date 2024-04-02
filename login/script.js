let button = document.querySelector("button");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

// Add event listener for the Enter key press
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    login();
  }
});

// Add event listener for the login button click
button.addEventListener("click", login);

// Function to handle the login process
function login() {
  let namevalue = username.value;
  let passvalue = password.value;
  
  if (namevalue !== "" && passvalue !== "") {
    let storedName = localStorage.getItem("UserName");
    let storedPass = localStorage.getItem("Password");

    if (namevalue === storedName && passvalue === storedPass) {
      username.value = "";
      password.value = "";
      alert("Login Successful");
      window.location.href = "../welcome/index.html"; // Redirect to welcome page
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  } else {
    alert("Please fill in both username and password fields.");
  }
}
