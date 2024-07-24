const input_box = document.getElementById("input-box");
const list_cotainer = document.getElementById("list-container");
const click = document.getElementById("click");
click.addEventListener("click", function () {
  if (input_box.value === "") {
    alert("Please enter Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_box.value;
    list_cotainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_box.value = "";
  savedata();
});
list_cotainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);
function savedata() {
  localStorage.setItem("data", list_cotainer.innerHTML);
}
function showTask() {
  list_cotainer.innerHTML = localStorage.getItem("data");
}
showTask();
