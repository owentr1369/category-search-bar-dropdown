let select = document.getElementById("select");
let list = document.getElementById("list");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let inputField = document.getElementById("inputField");

select.addEventListener("click", () => {
  list.classList.toggle("open");
});

for (option of options) {
  option.addEventListener("click", function () {
    selectText.innerText = this.innerText;
    inputField.placeholder = "Search in " + this.innerText;
  });
}
