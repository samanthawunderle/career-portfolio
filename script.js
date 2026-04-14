// ----------------------
// TAB SYSTEM + GLITCH TRANSITION
// ----------------------

function showTab(id, event) {

  // glitch overlay trigger
  const glitch = document.createElement("div");
  glitch.className = "glitch-flash";
  document.body.appendChild(glitch);

  setTimeout(() => glitch.remove(), 300);

  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

// ----------------------
// TYPING EFFECT
// ----------------------

const text = "Hi, I'm Samantha Wunderle";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
type();

// ----------------------
// NODE BACKGROUND (RESTORED)
// ----------------------

const canvas = document.getElementById("nodeCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let nodes = Array.from({ length: 90 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  vx: (Math.random() - 0.5) * 0.8,
  vy: (Math.random() - 0.5) * 0.8
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let dx = nodes[i].x - nodes[j].x;
      let dy = nodes[i].y - nodes[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 0, 80, 0.15)";
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  // draw nodes
  nodes.forEach(n => {
    n.x += n.vx;
    n.y += n.vy;

    if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

    ctx.beginPath();
    ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#ff2e63";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
