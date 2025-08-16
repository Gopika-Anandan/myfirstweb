// Welcome message
window.onload = () => {
  alert("Welcome to the Skills Test!");
  if (document.getElementById("studentCount")) {
    updateCount();
  }
};

// Theme change
if (document.getElementById("themeBtn")) {
  document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Update student count
function updateCount() {
  let rows = document.querySelectorAll("#studentsTable tbody tr").length;
  document.getElementById("studentCount").textContent = rows;
}

// Add new student
if (document.getElementById("addStudentForm")) {
  document.getElementById("addStudentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("sName").value;
    let age = document.getElementById("sAge").value;
    let skill = document.getElementById("sSkill").value;

    if (!name || !age || !skill) {
      alert("All fields are required!");
      return;
    }

    let row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${age}</td><td>${skill}</td>`;
    document.querySelector("#studentsTable tbody").appendChild(row);
    updateCount();
  });
}

// Contact form validation
if (document.getElementById("contactForm")) {
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let n = document.getElementById("cName").value;
    let em = document.getElementById("cEmail").value;
    let m = document.getElementById("cMsg").value;
    let msgBox = document.getElementById("formMessage");

    if (!n || !em || !m) {
      msgBox.textContent = "Please fill all fields!";
      msgBox.style.color = "red";
    } else {
      msgBox.textContent = "Form submitted successfully!";
      msgBox.style.color = "green";
    }
  });
}

// Sort students by age
if (document.getElementById("sortBtn")) {
  document.getElementById("sortBtn").addEventListener("click", () => {
    let table = document.getElementById("studentsTable").tBodies[0];
    let rows = Array.from(table.rows);
    rows.sort((a, b) => parseInt(a.cells[1].textContent) - parseInt(b.cells[1].textContent));
    rows.forEach(r => table.appendChild(r));
  });
}
