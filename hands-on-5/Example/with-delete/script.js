const main = () => {
  const inputField = document.getElementById("newtodo");
  const button = document.getElementById("addtodo");
  const todoLists = document.getElementById("todos");

  // * Add event listener to button for enter a new todo
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const newTodo = document.createElement("li");

    const trashIcon = document.createElement("img");
    trashIcon.setAttribute("src", "trash.svg");
    trashIcon.classList.add("trash");

    if (!inputField.value) {
      alert("Please input something!");
      return;
    }

    newTodo.textContent = inputField.value;

    newTodo.appendChild(trashIcon);

    todoLists.appendChild(newTodo);

    // * clear form for the better ux
    inputField.value = "";
  });

  // * Add event listener to todoLists for detect that user clicked <li> element inside <ul> or not
  todoLists.addEventListener("click", (e) => {
    // * If user click LI, toggle class "checked" to the <li> tag
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }

    // * If the user clicks on an IMG element whose parent element is a <li> tag, and the <li> tag is a child of todoLists
    // * Then, e.target.parentElement refers to a <li> tag, and you can remove it from todoLists.
    if (e.target.tagName === "IMG") {
      todoLists.removeChild(e.target.parentElement);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
