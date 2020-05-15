localStorage.items = undefined;

//console.log(localStorage.items);

// Adding a Task 
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', addTask);

const editBtn = document.querySelector('.editBtn');
editBtn.addEventListener('click', editTask);
const checkBtn = document.querySelector('.checkBtn');
checkBtn.addEventListener('click', checkTask);
const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', delTask);

function addTask(e) {
    e.preventDefault();
    const title = document.querySelector('#taskTitle').value;
    const desc = document.querySelector('#taskDesc').value;
    if (title == '' && desc == '') {
        alert('Please enter title or description');
        return false;
    }
    if (localStorage.items == 'undefined')
        localStorage.items = JSON.stringify([]);
    else {
        const data = JSON.parse(localStorage.items);
        data.push({ title, desc });
        localStorage.items = JSON.stringify(data);
    }

    //creating new div on clicking
    const div = document.createElement('div');
    div.classList.add('allTasks');
    const key = document.createElement('span');
    key.innerText = title + " ";
    div.appendChild(key);
    const val = document.createElement('pre');
    val.style = "display:inline";
    val.innerText = desc;
    div.appendChild(val);

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.classList.add('editBtn');
    div.appendChild(editBtn);

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('checkBtn');
    div.appendChild(checkBtn);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.classList.add("delBtn");
    div.appendChild(delBtn);

    document.querySelector('.display').appendChild(div);
    console.log(localStorage.items);
    document.querySelector('#taskTitle').value = '';
    document.querySelector('#taskDesc').value = '';
}


function editTask() {
    e.preventDefault();
    return false;
}
function checkTask(e) {
    e.preventDefault();
    const btn = e.target;
    btn.parentElement.classList.toggle('check');
}
function delTask(e) {
    e.preventDefault();
    const del = e.target;
    const btn = del.parentElement;
    btn.remove();
}