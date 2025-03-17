
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim(); 

    if (taskText === "") { 
        alert("Please enter a task.");
        return;
    }

    let newTask = document.createElement('li');
    newTask.innerHTML = taskText;

    let removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        newTask.innerHTML = "<del>" + taskText + "</del>";
        removeBtn.remove();
    });

    newTask.appendChild(removeBtn);

    newTask.addEventListener('click', function() {
        if (newTask.style.textDecoration === "line-through") {
            newTask.style.textDecoration = "none";
            newTask.style.color = "black";
        } else {
            newTask.style.textDecoration = "line-through";
            newTask.style.color = "gray";
        }
    });

    document.getElementById("task-list").appendChild(newTask);

    taskInput.value = ""; 
}

    // function addTask() {
    //         let button = document.getElementById('myButton');
    //         button.style.backgroundColor = 'pink'; 
    //     }

    // function changeColor() {
    //     let button = document.getElementById('myButton');
    //     button.style.backgroundColor = 'pink';
    //     button.innerText = "Clicked"; 
    // }


    // function removeItem() {
    //     let list = document.getElementById('main-List');
    //     if (list.lastElementChild) {
    //     list.lastElementChild.remove();
    //     }
    // }

