function showTab(id) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* typing animation */
const text = "Hi, I'm Samantha Wunderle";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}

type();
