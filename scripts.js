document.getElementById('menu-toggle').addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
});
