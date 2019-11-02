first.addEventListener("click", firstFunction);
second.addEventListener("click", secondFunction);
third.addEventListener("click", thirdFunction);

function firstFunction() {
  document.getElementById("sometext").innerText = "You clicked First button";
}

function secondFunction() {
  document.getElementById("sometext").innerText = "You clicked Second button";
}

function thirdFunction() {
  document.getElementById("sometext").innerText = "You clicked Third button";
}
