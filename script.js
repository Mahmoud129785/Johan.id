// script.js - 𝐉𝐎𝐇𝐀𝐍 | 𝐘𝐔𝐆𝐈 𝐁𝐎𝐓 - تأثيرات خرافية ومتقدمة

// ========== 1. تأثير المصفوفة (Matrix Rain) ==========
const matrixCanvas = document.getElementById('matrixCanvas');
if (matrixCanvas) {
    const ctx = matrixCanvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    matrixCanvas.width = width;
    matrixCanvas.height = height;
    
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    let columns = width / fontSize;
    let drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const blueIntensity = 100 + Math.random() * 155;
            ctx.fillStyle = `rgba(0, ${blueIntensity}, 255, ${0.3 + Math.random() * 0.5})`;
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
    
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        matrixCanvas.width = width;
        matrixCanvas.height = height;
        columns = width / fontSize;
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }
    });
}

// ========== 2. تأثير الجسيمات المتطايرة ==========
const particleCanvas = document.getElementById('particleCanvas');
if (particleCanvas) {
    const pCtx = particleCanvas.getContext('2d');
    let pWidth = window.innerWidth;
    let pHeight = window.innerHeight;
    particleCanvas.width = pWidth;
    particleCanvas.height = pHeight;
    
    let particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * pWidth,
            y: Math.random() * pHeight,
            radius: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 0.8,
            speedY: (Math.random() - 0.5) * 0.8,
            opacity: Math.random() * 0.5 + 0.2,
            color: `rgba(0, ${100 + Math.random() * 155}, 255, ${Math.random() * 0.5 + 0.2})`
        });
    }
    
    function drawParticles() {
        pCtx.clearRect(0, 0, pWidth, pHeight);
        for (let p of particles) {
            pCtx.beginPath();
            pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            pCtx.fillStyle = p.color;
            pCtx.fill();
            
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0) p.x = pWidth;
            if (p.x > pWidth) p.x = 0;
            if (p.y < 0) p.y = pHeight;
            if (p.y > pHeight) p.y = 0;
        }
        requestAnimationFrame(drawParticles);
    }
    drawParticles();
    
    window.addEventListener('resize', () => {
        pWidth = window.innerWidth;
        pHeight = window.innerHeight;
        particleCanvas.width = pWidth;
        particleCanvas.height = pHeight;
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * pWidth,
                y: Math.random() * pHeight,
                radius: Math.random() * 4 + 1,
                speedX: (Math.random() - 0.5) * 0.8,
                speedY: (Math.random() - 0.5) * 0.8,
                opacity: Math.random() * 0.5 + 0.2,
                color: `rgba(0, ${100 + Math.random() * 155}, 255, ${Math.random() * 0.5 + 0.2})`
            });
        }
    });
}

// ========== 3. تأثير الموجات ==========
const waveCanvas = document.getElementById('waveCanvas');
if (waveCanvas) {
    const wCtx = waveCanvas.getContext('2d');
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;
    waveCanvas.width = wWidth;
    waveCanvas.height = wHeight;
    
    let time = 0;
    
    function drawWaves() {
        wCtx.clearRect(0, 0, wWidth, wHeight);
        wCtx.beginPath();
        wCtx.moveTo(0, wHeight / 2);
        
        for (let x = 0; x < wWidth; x++) {
            const y = wHeight / 2 + Math.sin(x * 0.01 + time) * 30 + Math.cos(x * 0.02 + time * 1.5) * 15;
            wCtx.lineTo(x, y);
        }
        
        wCtx.strokeStyle = 'rgba(0, 150, 255, 0.15)';
        wCtx.lineWidth = 2;
        wCtx.stroke();
        
        time += 0.02;
        requestAnimationFrame(drawWaves);
    }
    drawWaves();
    
    window.addEventListener('resize', () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;
        waveCanvas.width = wWidth;
        waveCanvas.height = wHeight;
    });
}

// ========== 4. الأصوات التفاعلية ==========
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
    const clickElements = document.querySelectorAll('.click-sound, .link-btn, .contact-btn, .badge, .stat-item, .service-card, .project-card, .script-card, .faq-card, .link-card');
    clickElements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            playClickSound();
        });
        el.addEventListener('mouseenter', () => {
            playHoverSound();
        });
    });
}

// ========== 5. نسخ الرقم وإظهار توست ==========
function copyNumber() {
    navigator.clipboard.writeText('+972599351264').then(() => {
        showToast('✅ تم نسخ الرقم!');
    }).catch(() => {
        showToast('❌ فشل النسخ، حاول مرة تانية');
    });
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
    toast.style.opacity = '1';
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.display = 'none';
            toast.style.opacity = '1';
        }, 300);
    }, 2500);
}

// ========== 6. تحريك أشرطة المهارات ==========
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// ========== 7. عدادات إحصائيات واقعية ==========
function animateStats() {
    const stats = [
        { id: 'yearsExp', target: 1 },
        { id: 'projectsCount', target: 25 },
        { id: 'clientsCount', target: 120 },
        { id: 'botsCount', target: 8 },
        { id: 'channelMembers', target: 2500 },
        { id: 'linesCount', target: 15000 }
    ];
    
    stats.forEach(stat => {
        const el = document.getElementById(stat.id);
        if (!el) return;
        let current = 0;
        const target = stat.target;
        const increment = target / 55;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                if (stat.id === 'channelMembers' || stat.id === 'linesCount') {
                    el.textContent = target.toLocaleString();
                } else {
                    el.textContent = Math.floor(target);
                }
                clearInterval(timer);
            } else {
                if (stat.id === 'channelMembers' || stat.id === 'linesCount') {
                    el.textContent = Math.floor(current).toLocaleString();
                } else {
                    el.textContent = Math.floor(current);
                }
            }
        }, 35);
    });
}

// ========== 8. جلب عدد أعضاء القناة (محاكاة) ==========
function fetchChannelMembers() {
    const channelLink = document.getElementById('channelLink');
    if (channelLink) {
        const membersElement = document.getElementById('channelMembers');
        if (membersElement) {
            let count = 0;
            const target = 2500;
            const interval = setInterval(() => {
                count += Math.floor(Math.random() * 30) + 10;
                if (count >= target) {
                    membersElement.textContent = target.toLocaleString();
                    clearInterval(interval);
                } else {
                    membersElement.textContent = count.toLocaleString();
                }
            }, 100);
        }
    }
}

// ========== 9. تأثير ظهور العناصر عند التمرير ==========
function addScrollReveal() {
    const elements = document.querySelectorAll('.skill-card, .service-card, .project-card, .script-card, .testimonial-card, .faq-card, .stat-card, .link-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
}

// ========== 10. تأثير الماوس ثلاثي الأبعاد ==========
function addMouse3DEffect() {
    const cards = document.querySelectorAll('.glass-card, .script-card, .service-card, .project-card');
    
    cards.forEach(card => {
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

// ========== 11. تأثير الكتابة على البطاقة الشخصية ==========
function typeWriterEffect() {
    const bioText = document.querySelector('.profile-bio');
    if (!bioText) return;
    
    const originalText = bioText.innerText;
    bioText.innerText = '';
    let i = 0;
    
    function type() {
        if (i < originalText.length) {
            bioText.innerText += originalText.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }
    type();
}

// ========== 12. تأثير المؤشر اللامع ==========
function addCursorGlow() {
    const cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 150, 255, 0.4), transparent);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursorGlow);
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorGlow.style.opacity = '1';
    });
}

// ========== 13. تأثير الأزرار عند الضغط ==========
function addRippleEffect() {
    const buttons = document.querySelectorAll('.contact-btn, .link-btn, .buy-btn, .stat-item');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: rippleAnim 0.6s linear;
                pointer-events: none;
            `;
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// إضافة الـ keyframes للـ ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleAnim {
        0% { transform: scale(0); opacity: 0.5; }
        100% { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ========== 14. ساعة حية في الفوتر ==========
function updateRealTime() {
    const timeElement = document.createElement('div');
    timeElement.className = 'real-time';
    timeElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.7rem;
        color: #00aaff;
        z-index: 999;
        font-family: monospace;
        border: 1px solid rgba(0, 150, 255, 0.3);
    `;
    document.body.appendChild(timeElement);
    
    function update() {
        const now = new Date();
        const time = now.toLocaleTimeString('ar-EG');
        timeElement.innerHTML = `<i class="fas fa-clock"></i> ${time}`;
    }
    update();
    setInterval(update, 1000);
}

// ========== 15. تفعيل الضغط على الاسكربتات ==========
function setupScriptCards() {
    const scriptCards = document.querySelectorAll('.script-card');
    scriptCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('buy-btn') || e.target.parentElement.classList.contains('buy-btn')) {
                return;
            }
            const url = card.getAttribute('data-script-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
        
        const buyBtn = card.querySelector('.buy-btn');
        if (buyBtn) {
            buyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const url = card.getAttribute('data-script-url');
                if (url) {
                    window.open(url, '_blank');
                }
            });
        }
    });
}

// ========== 16. تأثير الخلفية المتغيرة ==========
function changeBgIntensity() {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        let intensity = 0.3;
        let direction = 0.01;
        setInterval(() => {
            intensity += direction;
            if (intensity >= 0.5 || intensity <= 0.2) {
                direction *= -1;
            }
            heroBg.style.filter = `blur(10px) brightness(${intensity})`;
        }, 200);
    }
}

// ========== 17. تشغيل كل حاجة عند تحميل الصفحة ==========
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
    animateStats();
    addClickSounds();
    addScrollReveal();
    addMouse3DEffect();
    typeWriterEffect();
    addCursorGlow();
    addRippleEffect();
    updateRealTime();
    setupScriptCards();
    fetchChannelMembers();
    changeBgIntensity();
    
    console.log('%c𝐉𝐎𝐇𝐀𝐍 | 𝐘𝐔𝐆𝐈 𝐁𝐎𝐓 - الموقع شغال بكفاءة 100%', 'color: #00aaff; font-size: 16px; font-weight: bold;');
    console.log('%cتم تحميل جميع التأثيرات بنجاح 🚀', 'color: #00ff88; font-size: 14px;');
});

// ========== 18. منع الكليك الأيمن (اختياري) ==========
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// ========== 19. تأثير عند العودة للصفحة ==========
window.addEventListener('pageshow', () => {
    animateSkills();
    animateStats();
});

// ========== 20. تحسين الأداء ==========
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        console.log('تم التمرير - تحسين الأداء');
    }, 100);
});
