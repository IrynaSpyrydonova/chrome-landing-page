const todayBtn = document.querySelector('#today');
const todoList = document.querySelector('.task-container');


todayBtn.addEventListener('click', function(){

    if(todoList.style.display=='none') { 
        todoList.style.display='block'; 
    } else {
        todoList.style.display='none'
    }
    
});



