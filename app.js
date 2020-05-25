var plus = document.querySelector(".todo-button");
plus.addEventListener("click", addTask);

function addTask(event) {
    event.preventDefault();
    //           todocontainer to p
    let todoContainer = document.querySelector(".todo-container");
    let todoList = document.querySelector(".todo-list");
    let todoItem = document.createElement("div");
    let todoWrite = document.createElement("div");
    let p = document.createElement("p");
    todoWrite.classList.add("todo-write");
    todoItem.classList.add("todo-item");
    todoList.classList.add("todo-Item");
    todoContainer.classList.add("todo-List");
    console.log(todoContainer);
    //    todocontainer to p    üzerine yazma
    p.innerText = "ahmet";
    todoWrite.appendChild(p)
    todoItem.appendChild(todoWrite);
    todoList.appendChild(todoItem);
    todoContainer.appendChild(todoList);
    //       button group
    let button = document.createElement("div");
    button.classList.add("button");
    let todoCheck = document.createElement("button");
    todoCheck.classList.add("todo-check");
    let todoTrash = document.createElement("button");
    todoTrash.classList.add("todo-times");
    let faCheckSpan = document.createElement("span");
    faCheckSpan.classList.add("fa-check-span");
    let faTrashSpan = document.createElement("span");
    faTrashSpan.classList.add("fa-trash-span");
    faCheckSpan.innerHTML = '<i class="fas fa-check"></i>';
    faTrashSpan.innerHTML = '<i class="fas fa-trash"></i>';
    todoCheck.appendChild(faCheckSpan);
    todoTrash.appendChild(faTrashSpan);
    button.appendChild(todoCheck);
    button.appendChild(todoTrash);
    todoItem.appendChild(button);


}
console.log(plus);