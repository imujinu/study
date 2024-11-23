const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

const saveTodos = () => {
  const todos = [];
  document.querySelectorAll(".todo-item").forEach((item) => {
    todos.push({
      text: item.querySelector("span").innerText,
      completed: item.querySelector('input[type="checkbox"]').checked,
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  todos.forEach((todo) => addTodoToDOM(todo.text, todo.completed));
};

const addTodoToDOM = (text, completed = false) => {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
    <input type="checkbox" ${completed ? "checked" : ""} />
    <span class="${completed ? "completed" : ""}">${text}</span>
    <button class="delete-btn">X</button>
  `;

  li.querySelector('input[type="checkbox"]').addEventListener("change", (e) => {
    li.querySelector("span").classList.toggle("completed", e.target.checked);
    saveTodos();
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    saveTodos();
  });

  todoList.appendChild(li);
};

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    addTodoToDOM(text);
    input.value = "";
    saveTodos();
  }
});

loadTodos();
