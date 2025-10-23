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

  // Ensure the nav is visible when resizing to wider viewports.
  function resetNavOnResize() {
    if (window.innerWidth > 720) {
      // remove any inline display so CSS can control visibility on larger screens
      mainNav.style.display = '';
      mainNav.setAttribute('aria-hidden', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }

  window.addEventListener('resize', resetNavOnResize);
  // run once on load in case the page opened at a larger size
  resetNavOnResize();

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

// Accordion open/close behavior
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;

    // Prevent "Call to Action" accordion from closing
    if (item.id === 'cta') {
      item.classList.add('active'); // stays open
      return;
    }

    // Close any open panel (except CTA)
    document.querySelectorAll('.accordion-item.active').forEach(open => {
      if (open.id !== 'cta' && open !== item) {
        open.classList.remove('active');
      }
    });

    // Toggle clicked accordion (if not CTA)
    if (item.id !== 'cta') {
      item.classList.toggle('active');
      item.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Automatically expand correct accordion when nav or CTA link is clicked
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').slice(1);
    const targetItem = document.getElementById(targetId);
    
    if (targetItem && targetItem.classList.contains('accordion-item')) {
      e.preventDefault();

      // Keep CTA always open
      document.querySelectorAll('.accordion-item.active').forEach(open => {
        if (open.id !== 'cta') open.classList.remove('active');
      });

      targetItem.classList.add('active');
      targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Keep "Call to Action" open by default
window.addEventListener('DOMContentLoaded', () => {
  const ctaPanel = document.getElementById('cta');
  if (ctaPanel) {
    ctaPanel.classList.add('active');
  }
});