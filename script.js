const todoInput = document.querySelector(".todo-input") //input
const todoButton = document.querySelector(".todo-button") //button
const todoList = document.querySelector(".todo-list")//ul

/* functions */

const addTodo = (event)=> {
    //prevent form from submitting
    event.preventDefault()
    /* create toDoDiv */
const toDoDiv = documnet.createElement("div")
todoDiv.classList.add("toDoDiv")
const newTodo = document.createElement("li")
newTodo.innerText = todoInput.value;
todoDiv.appendChild(newTodo)
//create complete button
const CompletedButton = document.createElement("button")
completedButton.innerHTML = "<i class='fas fa-plus-square'></i>"
comleteButton.classList.add("complete-btn")
todoDiv.appenchild(completeButton)

//creating delete button

}

//ES5 => ES6





/* event-listeners */
todoButton.addEventListener("click",addTodo)