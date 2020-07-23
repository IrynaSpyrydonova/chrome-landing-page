
"use strict";

console.log("--- loading: todolist.js");

const container = document.querySelector('.task-container');
const inputValue = document.querySelector('.input');
const add = document.querySelector('.add');
// Save to Local storage
if(window.localStorage.getItem("todos") == undefined){
    let todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

let todosEX = window.localStorage.getItem("todos");
let todos = JSON.parse(todosEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	let itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	let input = document.createElement('input');
    	input.type = "text";
        input.value = name;
        input.classList.add('item_input');
        
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox")
        checkbox.classList.add('checkbox');

    	let remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = '<i class="fas fa-minus"></i>';
        remove.addEventListener('click', () => this.remove(itemBox, name));

        container.appendChild(itemBox);
        itemBox.appendChild(checkbox);
        itemBox.appendChild(input);
        itemBox.appendChild(remove);

    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}

for (let v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}

new item("todo");