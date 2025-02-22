
        document.addEventListener("DOMContentLoaded", loadTasks);

        function addTask() {
            let name = document.getElementById("taskName").value.trim();
            let desc = document.getElementById("taskDesc").value.trim();
            let date = document.getElementById("taskDate").value;
            let time = document.getElementById("taskTime").value;

            if (name === "" || date === "" || time === "") {
                alert("Please fill out all required fields!");
                return;
            }
            
            

            let task = { name, desc, date, time, completed: false };
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));

            renderTask(task);
            clearInputs();
        }

        function renderTask(task, index) {
            let li = document.createElement("li");
            li.className = `task ${task.completed ? "completed" : ""}`;
            li.innerHTML = `
                <strong>${task.name}</strong> 
                <p>${task.desc}</p>
                <small>📅 ${task.date} 🕒 ${task.time}</small>
                <div class="task-buttons">
                    <button class="complete-btn" onclick="toggleComplete(${index})">
                        ${task.completed ? "Undo" : "Complete"}
                    </button>
                    <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            document.getElementById("taskList").appendChild(li);
        }

        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            document.getElementById("taskList").innerHTML = "";
            tasks.forEach((task, index) => renderTask(task, index));
        }

        function toggleComplete(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }

        function deleteTask(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }

        function clearInputs() {
            document.getElementById("taskName").value = "";
            document.getElementById("taskDesc").value = "";
            document.getElementById("taskDate").value = "";
            document.getElementById("taskTime").value = "";
        }
    
