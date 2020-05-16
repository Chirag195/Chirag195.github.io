var data = [];

//console.log(localStorage.items);

// Adding a Task 
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', addTask);

const editBtn = document.querySelector('.display');
editBtn.addEventListener('click', editTask);


function addTask(e) {
    e.preventDefault();
    const title = document.querySelector('#taskTitle').value;
    const desc = document.querySelector('#taskDesc').value;
    if (title == '' && desc == '') {
        alert('Please enter title or description');
        return false;
    }
    const item = data.push({ title, desc });
    //creating new div on clicking
    const div = document.createElement('div');
    div.classList.add('allTasks');
    const key = document.createElement('span');
    key.innerText = title + " ";
    div.appendChild(key);
    const val = document.createElement('pre');
    val.style = "display:inline";
    val.innerText = "  " + desc;
    div.appendChild(val);


    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('checkBtn');
    div.appendChild(checkBtn);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.classList.add("delBtn");
    div.appendChild(delBtn);

    document.querySelector('.display').appendChild(div);
    document.querySelector('#taskTitle').value = '';
    document.querySelector('#taskDesc').value = '';
}


function editTask(e) {
    e.preventDefault();
    const item = e.target;

    const btn = e.target;
    if (item.classList[0] == 'checkBtn') {
        btn.parentElement.classList.toggle('check');
    }
    if (item.classList[0] == 'delBtn') {
        const del = e.target.parentElement;
        del.remove();
    }
}
