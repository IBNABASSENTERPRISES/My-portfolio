// Toggle menu (if you're using mobile nav)
document.getElementById('menu-toggle')?.addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
    navList?.classList.toggle('show');
});

// Handle contact form submission via Formspree
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            form.reset();
            status.textContent = "Thanks! Your message has been sent.";
            status.style.color = "green";
            status.style.display = "block";
        } else {
            status.textContent = "Oops! Something went wrong.";
            status.style.color = "red";
            status.style.display = "block";
        }
    } catch (error) {
        status.textContent = "Network error. Please try again later.";
        status.style.color = "red";
        status.style.display = "block";
    }
});
