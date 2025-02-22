const taskName = document.querySelector(".name");
const taskDesc = document.querySelector(".desc");
const taskTime = document.querySelector(".time");
const addTaskBtn = document.querySelector(".addTask");
const newTaskDiv = document.querySelector(".newTaskDiv");
const delAllBtn = document.querySelector(".delAllBtn");
const noTasks = document.querySelector("#noTasks");

function noTasksMessage() {
    if(newTaskDiv.children.length === 0) {
        noTasks.classList.remove("hidden");
    } else {
        noTasks.classList.add("hidden");
    }
}

function delAllBtnStatus() {
    delAllBtn.disabled = newTaskDiv.children.length === 0;
}

addTaskBtn.addEventListener("click", function() {
    const taskNameText = taskName.value.trim();
    const taskDescText = taskDesc.value.trim();
    const taskTimeValue = taskTime.value;

    if(taskNameText === "" && taskDescText === "" && taskTimeValue === ""){
        alert("Please Enter Task Name, Task Description and Deadline to add New Task");
    } else if(taskDescText === "" && taskTimeValue === "") {
        alert("Please Enter Task Description and Deadline to add New Task");
    } else if(taskNameText === "" && taskDescText === "") {
        alert("Please Enter Task Name and Task Description to add New Task");
    } else if(taskNameText === "" && taskTimeValue === "") {
        alert("Please Enter Task Name and Deadline to add New Task");
    } else if(taskNameText === "") {
        alert("Please Enter Task Name");
    } else if(taskDescText === "") {
        alert("Please Enter Task Description");
    } else if(taskTimeValue === "") {
        alert("Please Enter Deadline for Your Task");
    }

    let newTask = document.createElement("div");
    newTask.classList.add("newTaskItem");
    let newTaskName = document.createElement("div");
    newTaskName.innerHTML = `${taskNameText}`;

    let newTaskDesc = document.createElement("div");
    newTaskDesc.innerHTML = `${taskDescText}`;

    let newTaskTime = document.createElement("div");
    newTaskTime.innerHTML = `${taskTimeValue}`;

    let newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type = "checkbox";
    newTaskCheckbox.id = "checkbox_" + Date.now();

    let label = document.createElement("label");
    label.htmlFor = newTaskCheckbox.id;
    label.textContent = " Mark as Completed";

    let status = document.createElement("span");
    status.textContent = " Incomplete";
    status.classList.add("status", "incomplete");

    newTaskCheckbox.addEventListener("change", function() {
        if (newTaskCheckbox.checked) {
            status.textContent = " Completed";
            status.classList.remove("incomplete");
            status.classList.add("completed");
        } else {
            status.textContent = " Incomplete";
            status.classList.remove("completed");
            status.classList.add("incomplete");
        }
    });

    let wrapper = document.createElement("div");
            wrapper.appendChild(newTaskCheckbox);
            wrapper.appendChild(label);
            wrapper.appendChild(status);

    let delTaskBtn = document.createElement("button");
    delTaskBtn.type = "submit";
    delTaskBtn.innerText = "Delete";
    delTaskBtn.classList.add("delTaskBtn");

    newTask.appendChild(newTaskName);
    newTask.appendChild(newTaskDesc);
    newTask.appendChild(newTaskTime);
    newTask.appendChild(wrapper);
    newTask.appendChild(delTaskBtn);

    newTaskDiv.appendChild(newTask);

    taskName.value = "";
    taskDesc.value = "";
    taskTime.value = "";

    noTasksMessage();
    delAllBtnStatus();
});

newTaskDiv.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON"){
        event.target.parentElement.remove();
        noTasksMessage();
        delAllBtnStatus();
    }
});

delAllBtn.addEventListener("click", function() {
    newTaskDiv.innerHTML = "";
    noTasksMessage();
    delAllBtnStatus();
})



noTasksMessage();
delAllBtnStatus();
