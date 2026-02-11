// CLICK EVENT
const btn = document.getElementById("ctaBtn");

if (btn) {
  btn.addEventListener("click", () => {
    alert("Dzięki za kliknięcie!");
  });
}

// DYNAMIC SKILLS
const skills = ["HTML", "CSS", "JavaScript", "Git"];
const list = document.getElementById("skillsList");

if (list) {
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    list.appendChild(li);
  });
}

// FORM VALIDATION
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Formularz wysłany!");
  });
}
