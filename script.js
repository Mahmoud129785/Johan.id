// script.js - 𝐉𝐎𝐇𝐀𝐍 | 𝐘𝐔𝐆𝐈 𝐁𝐎𝐓 - تأثيرات متطورة

// ========== 1. تأثير المصفوفة ==========
const canvas = document.getElementById('matrixCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops = [];
    
    for (let i = 0; i < columns; i++) drops[i] = Math.random() * -100;
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const blueIntensity = 100 + Math.random() * 155;
            ctx.fillStyle = `rgba(0, ${blueIntensity}, 255, ${0.3 + Math.random() * 0.5})`;
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = [];
        for (let i = 0; i < columns; i++) drops[i] = Math.random() * -100;
    });
}

// ========== 2. تأثير الجسيمات (فقاعات متحركة) ==========
const particleCanvas = document.getElementById('particleCanvas');
if (particleCanvas) {
    const pCtx = particleCanvas.getContext('2d');
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    
    let particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * particleCanvas.width,
            y: Math.random() * particleCanvas.height,
            radius: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    function drawParticles() {
        pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        for (let p of particles) {
            pCtx.beginPath();
            pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            pCtx.fillStyle = `rgba(0, 150, 255, ${p.opacity})`;
            pCtx.fill();
            
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0) p.x = particleCanvas.width;
            if (p.x > particleCanvas.width) p.x = 0;
            if (p.y < 0) p.y = particleCanvas.height;
            if (p.y > particleCanvas.height) p.y = 0;
        }
        requestAnimationFrame(drawParticles);
    }
    drawParticles();
    
    window.addEventListener('resize', () => {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    });
}

// ========== 3. الأصوات التفاعلية ==========
function playClickSound() {
    const sound = document.getElementById('clickSound');
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log('صوت مش شغال:', e));
    }
}

function playHoverSound() {
    const sound = document.getElementById('hoverSound');
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log('صوت مش شغال:', e));
    }
}

function addClickSounds() {
    document.querySelectorAll('.click-sound').forEach(el => {
        el.addEventListener('click', (e) => { e.stopPropagation(); playClickSound(); });
        el.addEventListener('mouseenter', () => playHoverSound());
    });
}

// ========== 4. نسخ الرقم ==========
function copyNumber() {
    navigator.clipboard.writeText('+972599351264').then(() => showToast('✅ تم نسخ الرقم!'))
    .catch(() => showToast('❌ فشل النسخ، حاول مرة تانية'));
}

function showToast(msg) {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-msg';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => { toast.style.display = 'none'; toast.style.opacity = '1'; }, 300); }, 2500);
}

// ========== 5. أشرطة المهارات ==========
function animateSkills() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        let progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// ========== 6. عدادات واقعية ==========
function animateStats() {
    const stats = [
        { id: 'yearsExp', target: 3 },
        { id: 'projectsCount', target: 20 },
        { id: 'clientsCount', target: 85 },
        { id: 'botsCount', target: 6 }
    ];
    stats.forEach(stat => {
        const el = document.getElementById(stat.id);
        if (!el) return;
        let current = 0;
        const target = stat.target;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else el.textContent = Math.floor(current);
        }, 30);
    });
}

// ========== 7. تأثير ظهور العناصر ==========
function addScrollReveal() {
    const cards = document.querySelectorAll('.skill-card, .link-card, .stat-card, .bot-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// ========== 8. تأثير الماوس ثلاثي الأبعاد ==========
function addMouseEffect() {
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

// ========== 9. ساعة حية ==========
function updateRealTime() {
    const timeElement = document.createElement('div');
    timeElement.className = 'real-time';
    timeElement.style.cssText = `position:fixed; bottom:20px; right:20px; background:rgba(0,0,0,0.5); backdrop-filter:blur(5px); padding:5px 12px; border-radius:20px; font-size:0.7rem; color:#00aaff; z-index:999; font-family:monospace;`;
    document.body.appendChild(timeElement);
    function update() {
        timeElement.innerHTML = `<i class="fas fa-clock"></i> ${new Date().toLocaleTimeString('ar-EG')}`;
    }
    update();
    setInterval(update, 1000);
}

// ========== 10. تشغيل كل حاجة ==========
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
    animateStats();
    addClickSounds();
    addScrollReveal();
    addMouseEffect();
    updateRealTime();
});
