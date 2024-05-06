let eye = document.getElementById("eye");
let password = document.getElementById("password");
function result() {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
}
