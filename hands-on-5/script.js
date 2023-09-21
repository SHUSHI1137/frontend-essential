const main = () => {
  const taskInput = document.getElementById("task");
  const taskButton = document.getElementById("add-task");
  const taskItemList = document.getElementById("task-item");

  taskButton.addEventListener("click", (e) => {
    e.preventDefault();
    newlistTask = document.createElement("li");
    newlistTask.textContent = taskInput.value;

    const trashIcon = document.createElement("img");
    trashIcon.setAttribute("src", "trash.svg");
    trashIcon.classList.add("trash");

    taskItemList.appendChild(newlistTask);
    newlistTask.appendChild(trashIcon);
  });

  const checkTask = document.getElementById("task-item");
  checkTask.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
    }
    if (e.target.tagName === "IMG") {
      taskItemList.removeChild(e.target.parentElement);
    }
  });

  const deleteTask = document.getElementById("task-item");
  deleteTask.addEventListener();
  deleteTask.remove;

  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
