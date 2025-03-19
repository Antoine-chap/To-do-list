import {addTodo} from "./components/addTodo.js"
import {getTasks} from "./components/getTasks.js";


const buttonTodo = document.querySelector("#buttonTodo");
buttonTodo.addEventListener('click',() => {addTodo()});
getTasks();

