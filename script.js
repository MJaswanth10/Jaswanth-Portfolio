// Mobile nav + footer year + contact form simulation + small focus handling
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const btn = document.getElementById('nav-toggle');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (btn) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      // toggle bootstrap collapse for accessibility (if present)
      const collapse = document.getElementById('nav-collapse');
      if (collapse) {
        collapse.classList.toggle('show');
      }
    });
  }

  // Close nav when link clicked (mobile)
  Array.from(document.querySelectorAll('#nav a')).forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        const collapse = document.getElementById('nav-collapse');
        if (collapse) collapse.classList.remove('show');
      }
    });
  });

  // Contact form handling (client-side simulation)
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').trim();
      const email = (data.get('email') || '').trim();
      const message = (data.get('message') || '').trim();

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill all fields.';
        formMessage.style.color = '#ffb3b3';
        return;
      }

      formMessage.style.color = '#9ef6c0';
      formMessage.textContent = 'Sending…';
      setTimeout(() => {
        formMessage.textContent = 'Message sent! I will get back to you soon.';
        form.reset();
      }, 900);
    });

    // make reset button visually consistent
    const resetBtn = form.querySelector('button[type="reset"]');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        formMessage.textContent = '';
      });
    }
  }

  // keyboard accessibility for project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });
  });
});
