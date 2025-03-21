// تفعيل النافذة المنبثقة
const modal = document.getElementById('luxuryModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// خلفية الجزيئات المتحركة
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: 'rgba(248,194,145,0.8)'
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
}

function updateParticles() {
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
}

function animateParticles() {
  drawParticles();
  updateParticles();
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// تفعيل القائمة المنسدلة في الأجهزة المحمولة
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
});
// تشغيل موسيقى في الخلفية بصوت منخفض
const backgroundMusic = new Audio('12.mp3'); // ضع اسم الملف الصحيح هنا
backgroundMusic.loop = true; // تشغيل الموسيقى بشكل متكرر
backgroundMusic.volume = 0.1; // تحديد مستوى الصوت

// التأكد من تشغيل الموسيقى بعد تفاعل المستخدم (لأن بعض المتصفحات تمنع التشغيل التلقائي)
document.addEventListener('click', function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play().catch(error => console.log("المتصفح منع التشغيل التلقائي:", error));
  }
}, { once: true });




