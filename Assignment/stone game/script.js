let computer = document.getElementById("computer");
let computer_input = Math.floor(Math.random() * 3) + 1;
computer.innerText = `Computer guess =>${computer_input}`;

function result() {
  let userselect = document.getElementById("userselect");
  let input = document.getElementById("input");

  console.log(userselect);
  userselect.innerText = `User guess => ${+input.value}`;
  event.preventDefault();

  let ans = document.getElementById("ans");

  let btn = document.getElementById("button");

  if (+input.value == computer_input) {
    ans.innerText = "Draw";
  } else if (+input.value == 1 && computer_input == 2) {
    ans.innerText = "Computer win";
  } else if (+input.value == 1 && computer_input == 3) {
    ans.innerText = "User  win";
  } else if (+input.value == 2 && computer_input == 1) {
    ans.innerText = "user win";
  } else if (+input.value == 2 && computer_input == 3) {
    ans.innerText = "Computer win";
  } else if (+input.value == 3 && computer_input == 1) {
    ans.innerText = "Computer win";
  } else {
    // 3 and 2
    ans.innerText = "User  win";
  }
}
