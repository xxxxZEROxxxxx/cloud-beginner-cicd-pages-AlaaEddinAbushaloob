// ============================================
// CI/CD Pipeline Website — Interactive Script
// ============================================

// --- Background Particles ---
(function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 12;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 200 + 60;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        container.appendChild(particle);
    }
})();

// --- Pipeline Simulator ---
let pipelineRunning = false;

function runPipeline() {
    if (pipelineRunning) return;
    pipelineRunning = true;

    const btn = document.getElementById('runPipelineBtn');
    const result = document.getElementById('deployResult');
    const steps = ['step-checkout', 'step-validate', 'step-build', 'step-deploy'];

    // Reset
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-icon">⏳</span> Running...';
    result.textContent = '';
    result.className = 'deploy-result';
    steps.forEach(id => {
        const el = document.getElementById(id);
        el.className = 'status-step';
    });

    // Animate steps sequentially
    steps.forEach((id, index) => {
        // Start running
        setTimeout(() => {
            document.getElementById(id).classList.add('running');
        }, index * 900);

        // Mark success
        setTimeout(() => {
            const el = document.getElementById(id);
            el.classList.remove('running');
            el.classList.add('success');
        }, index * 900 + 700);
    });

    // Final result
    setTimeout(() => {
        result.textContent = '✅ Deployment Successful! Site is live.';
        result.classList.add('show');
        btn.disabled = false;
        btn.innerHTML = '<span class="btn-icon">▶</span> Run Again';
        pipelineRunning = false;

        // Increment the deploy counter automatically
        updateCounter(1);
    }, steps.length * 900 + 300);
}

// --- Theme Toggle ---
function toggleTheme() {
    const html = document.documentElement;
    const label = document.getElementById('themeLabel');
    const btnIcon = document.querySelector('#themeToggleBtn .btn-icon');

    if (html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
        label.textContent = 'Switch to Light';
        btnIcon.textContent = '🌙';
    } else {
        html.setAttribute('data-theme', 'light');
        label.textContent = 'Switch to Dark';
        btnIcon.textContent = '☀️';
    }
}

// --- Deploy Counter ---
let deployCount = 0;

function updateCounter(delta) {
    deployCount = Math.max(0, deployCount + delta);
    const display = document.getElementById('counterDisplay');
    display.textContent = deployCount;

    // Bump animation
    display.classList.remove('bump');
    // Force reflow to restart animation
    void display.offsetWidth;
    display.classList.add('bump');
}

// --- Smooth Scroll for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
