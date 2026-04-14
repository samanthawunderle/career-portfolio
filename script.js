// ===== TAB SYSTEM (FIXED + ACTIVE STATE) =====
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

  // active nav highlight
  document.querySelectorAll("nav button").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}

// ===== TYPING EFFECT (CINEMATIC) =====
const text = "Hi, I'm Samantha Wunderle";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 90);
  }
}

type();
