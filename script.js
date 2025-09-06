// Click Event
const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.textContent = "You clicked the button 🎉";
});

// Mouseover / Mouseout
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.background = "tomato";
});

box.addEventListener("mouseout", () => {
  box.style.background = "lightblue";
});

// Keyboard Input
const input = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

input.addEventListener("keyup", () => {
  greeting.textContent = `Hello, ${input.value}! 👋`;
});

// Toggle Show/Hide
const toggleBtn = document.getElementById("toggleBtn");
const secretBox = document.getElementById("secretBox");

toggleBtn.addEventListener("click", () => {
  secretBox.classList.toggle("hidden");
});

// Log keys pressed
document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// =====Light/Dark Mode =====
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =====Counter Game =====
let score = 0;
const counterBtn = document.getElementById("counterBtn");
const scoreDisplay = document.getElementById("score");

counterBtn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  // Bonus: add little animation
  counterBtn.style.transform = "scale(1.2)";
  setTimeout(() => {
    counterBtn.style.transform = "scale(1)";
  }, 100);
});

// ===== Form Validation =====
const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

function showError(input, message) {
  const small = input.nextElementSibling;
  small.textContent = message;
}

function clearError(input) {
  const small = input.nextElementSibling;
  small.textContent = "";
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Name validation
  if(fullName.value.trim() === "") {
    showError(fullName, "Full name is required");
    valid = false;
  } else {
    clearError(fullName);
  }

  // Email validation
  if(email.value.trim() === "") {
    showError(email, "Email is required");
    valid = false;
  } else if(!validateEmail(email.value.trim())) {
    showError(email, "Invalid email format");
    valid = false;
  } else {
    clearError(email);
  }

  // Password validation
  if(password.value.trim() === "") {
    showError(password, "Password is required");
    valid = false;
  } else if(password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  } else {
    clearError(password);
  }

  if(valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Registration successful ✅";
    form.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fix errors above ❌";
  }
});