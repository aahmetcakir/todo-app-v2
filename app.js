var plus = document.querySelector(".todo-button");
plus.addEventListener("click",addTask);

function addTask(){
let todoItem=document.querySelector(".todo-item");
let p = document.querySelector("p");
p.append(todoItem);
console.log(p);
}
console.log(plus);