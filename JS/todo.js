const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
 
const TODOS_KEY ="todos"
let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
}

function deleteTodo(event){
   const li=event.target.parentElement;
   li.remove();
   todos = todos.filter((todo) => todo.id != parseInt(li.id))
   saveTodos();
}

function paintTodo(newTodo){
   const li = document.createElement("li")
   li.id = newTodo.id;
   const span = document.createElement("span")
   span.innerText=newTodo.text
   const button = document.createElement("button")
   button.innerText="X"
   li.appendChild(span)
   li.appendChild(button)
   button.addEventListener("click", deleteTodo)
   todoList.appendChild(li)
}

function handleTodoSubmit(e){
    e.preventDefault()
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newobj ={
        text :newTodo,
        id: Date.now(),
    }
    todos.push(newobj)
    paintTodo(newobj)
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsesave = JSON.parse(savedTodos)
    todos=parsesave;
    parsesave.forEach(paintTodo);
}

