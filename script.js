// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        navCta.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formStatus = document.getElementById('formStatus');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            const formData = new FormData(contactForm);
            
            const response = await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });
            
            if (response.ok) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Oops! Something went wrong. Please try again or email us directly at contact@flashconsultings.com';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.color = 'var(--primary-green)';
        link.style.fontWeight = '600';
    }
});
