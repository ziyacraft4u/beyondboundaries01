// Small interactive bits: nav toggle and contact form handling
document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', ()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.style.display = expanded ? 'none' : 'block';
    mainNav.setAttribute('aria-hidden', String(expanded));
  });

  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // contact form demo handler
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    status.textContent = 'Sending...';
    // fake delay
    setTimeout(()=>{
      status.textContent = 'Thanks — message received (demo only).';
      form.reset();
    }, 800);
  });
});