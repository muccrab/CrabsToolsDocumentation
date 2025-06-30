// main.js
window.addEventListener('scroll', function() {
    const panel = document.getElementById('toppanel');
    if (window.scrollY > 0) {
        panel.classList.add('fixed');
    } else {
        panel.classList.remove('fixed');
    }
});