let c = document.getElementById("c");
let cpp = document.getElementById("cpp");
let db = document.getElementById("db");
let html = document.getElementById("html");
let css = document.getElementById("css");
let java = document.getElementById("java");
let php = document.getElementById("php");

let result = document.getElementById("result");
let marks = document.getElementById("marks");
let pr = document.getElementById("pr");

function sum(event) {
  let summision;
  event.preventDefault();
  summision =
    Number(c.value) +
    Number(cpp.value) +
    Number(db.value) +
    Number(html.value) +
    Number(php.value) +
    Number(css.value) +
    Number(java.value);
  marks.innerHTML = `Total is <span style="color:blue;">${summision}</span>/350`;
  let ans = (summision / 350) * 100;
  pr.innerHTML = `Percentage is : <span style="color: blue;">${ans.toFixed(
    2
  )}</span>%`;
}
