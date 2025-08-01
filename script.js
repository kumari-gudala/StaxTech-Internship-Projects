document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme);
    themeToggle.checked = savedTheme === 'dark';
  
    themeToggle.addEventListener('change', () => {
      body.classList.toggle('dark');
      body.classList.toggle('light');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });
  });
  
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");
    const taskList = document.getElementById("taskList");
  
    const taskText = taskInput.value.trim();
    const priority = priorityInput.value;
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.classList.add(priority);
    li.textContent = taskText;
  
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      updateProgress();
    });
  
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = (e) => {
      e.stopPropagation();
      const newTask = prompt("Edit your task:", li.firstChild.textContent);
      if (newTask) {
        li.firstChild.textContent = newTask;
      }
    };
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      li.remove();
      updateProgress();
    };
  
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
  
    taskList.appendChild(li);
    taskInput.value = "";
    updateProgress();
  }
  
  function updateProgress() {
    const tasks = document.querySelectorAll("#taskList li");
    const completed = document.querySelectorAll("#taskList li.completed");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
  
    const percent = tasks.length === 0 ? 0 : (completed.length / tasks.length) * 100;
    progressBar.style.width = percent + "%";
    progressText.textContent = `Progress: ${Math.round(percent)}%`;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.className = currentTheme;
    updateToggleIcon();
  });
  
  function toggleTheme() {
    const isDark = document.body.classList.contains("dark");
    document.body.classList.toggle("dark", !isDark);
    document.body.classList.toggle("light", isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
    updateToggleIcon();
  }
  
  function updateToggleIcon() {
    const button = document.querySelector(".theme-toggle");
    const isDark = document.body.classList.contains("dark");
    button.textContent = isDark ? "🌜" : "🌞";
  }
  
  