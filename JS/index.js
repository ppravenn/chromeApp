const loginform = document.querySelector("#login-form")
const loginInput = loginform.querySelector("input")
const loginButton = loginform.querySelector("button")
const greeting = document.querySelector("#greeting")
const logout = document.querySelector("#logout")

CLASS_HIDDEN="hidden"
USERNAME_KEY = "username"

function onLoginSubmit(e){
    e.preventDefault();
    loginform.classList.add(CLASS_HIDDEN)
    const userName =loginInput.value
   localStorage.setItem(USERNAME_KEY, userName)
    paintGreeting(userName)
}

function paintGreeting(username){
    greeting.innerText = `반갑습니다. ${username}님`
    greeting.classList.remove(CLASS_HIDDEN)
    logout.classList.remove(CLASS_HIDDEN)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername == null){
    loginform.classList.remove(CLASS_HIDDEN)
    loginform.addEventListener("submit", onLoginSubmit)
} else{
  paintGreeting(savedUsername)
}

function logoutHandle(){
    localStorage.removeItem(USERNAME_KEY)
    loginform.classList.remove(CLASS_HIDDEN)
    greeting.classList.add(CLASS_HIDDEN)
    logout.classList.add(CLASS_HIDDEN)
}

logout.addEventListener("click", logoutHandle)