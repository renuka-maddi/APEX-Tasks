document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("taskInput");
    const addButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        const taskText = input.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        input.value = "";
    });
});

/* To use todo.js, add this HTML snippet somewhere: */
<!--
<div>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button id="addTask">Add Task</button>
    <ul id="taskList"></ul>
</div>
<script src="todo.js"></script>
-->