const userInput = document.getElementById('userInput');
const ul = document.getElementById('todo-list');
const explosionSrc = 'https://i.pinimg.com/originals/9d/1a/9d/9d1a9df0ec27d025b8f3d21a9bf4e561.gif'

function addTask() {
    const input = userInput.value.trim();
    if(input === "") return alert('input a task');

    const li = document.createElement('li');
    li.classList.add("list-item");

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add("task-checkbox");

    const textSpan = document.createElement('span');
    textSpan.textContent = input;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            const img = document.createElement('img');
            textSpan.style.textDecoration = 'line-through';
            textSpan.style.color = 'black';
            img.src = explosionSrc;
            img.style.width = '200%';
            img.style.height = '200%';
            img.style.transform = 'translate(-40%,-10%)';
            img.style.marginRight = '5px';
            img.style.position = 'absolute';
            li.insertBefore(img, textSpan);

            setTimeout(() => {
                img.remove();
            }, 2000); 
        } else {
        textSpan.style.textDecoration = 'none';
        textSpan.style.color = 'black';
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");


    deleteBtn.addEventListener('click', () => {
        li.remove();
    });


    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);


    ul.appendChild(li);

    userInput.value = "";

}