document.addEventListener('DOMContentLoaded', function(){
    const new_task = document.getElementById('new-task');
    const submit = document.getElementById('add');
    
    const todos = [];
function updateList() {
    taskList.innerHTML = '';
    todos.forEach((todo, index) =>{
        const lisstItem = document.createElement('li');
        listItem.innerHTML='
        <span>${todo} </span>
        <button class= 'edit'> Edit</button>
       < button class='delete'>Delete</button>
       
    
    .   '
       const editButton = listitem.querySelector('.edit');
       const deleteButton = listitem.querySelector('.delete');
       const taskTest = listitem.querySelector('.span');
       editButton.addEventListener('click', function(){
        const newTaskText = prompt ('Edit the task:',taskTest.textContent);
        if (newTaskText !== null && newTaskText.trim() !==''){
            todos[index]= newTaskText;
            updateList();
        }
       });
       deleteButton.addEventListener('click', function(){
        todos.splice(index, 1);
        updateList();
       });
       taskList.appendChild(lisstItem);
       
    });
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const trimmed_task = new_task.value.trim();
        of (trimmed-task !== ""){
            todos.push(trimmed_task);
            updateList();
            new_task.value = '';
        }
    });
};
