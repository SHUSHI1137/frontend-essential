const main = () => {
  const inputField = document.getElementById("newtodo");
  const button = document.getElementById("addtodo");
  const todoLists = document.getElementById("todos");

  // * Add event listener to button for enter a new todo
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const newTodo = document.createElement("li");

    // * Check if the input field is still empty
    if (!inputField.value) {
      alert("Please input something!");
      return;
    }

    newTodo.textContent = inputField.value;
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
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
