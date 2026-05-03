// ═══ NAV SCROLL ═══
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ═══ HAMBURGER ═══
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ═══ HERO CAROUSEL ═══
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let slideInterval;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function startCarousel() {
  slideInterval = setInterval(nextSlide, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    goToSlide(parseInt(dot.dataset.slide));
    startCarousel();
  });
});

startCarousel();

// ═══ TYPEWRITER (slower, more elegant) ═══
const target = document.querySelector('.typewriter-target');
if (target) {
  const phrases = ["Becomes a Statement.", "Feels Like Luxury.", "Tells Your Story."];
  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function typeWrite() {
    const phrase = phrases[phraseIdx];
    if (!isDeleting) {
      target.textContent = phrase.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === phrase.length) { isDeleting = true; setTimeout(typeWrite, 3500); return; }
    } else {
      target.textContent = phrase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    }
    setTimeout(typeWrite, isDeleting ? 25 : 50);
  }

  window.addEventListener('load', () => setTimeout(typeWrite, 1500));
}

// ═══ SCROLL ANIMATIONS (gentle fade-up) ═══
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 0.08, 0.4)}s`;
  fadeObserver.observe(el);
});

// ═══ FORM SUBMISSION ═══
const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.6';
    setTimeout(() => {
      form.style.display = 'none';
      document.querySelector('.form-success').style.display = 'block';
      const name = encodeURIComponent(form.querySelector('[name=name]').value);
      const service = encodeURIComponent(form.querySelector('[name=service]').value);
      const msg = encodeURIComponent(`Hi! I'd like to book at Glamhot Salon.\nName: ${decodeURIComponent(name)}\nService: ${decodeURIComponent(service)}`);
      window.open(`https://wa.me/919348696298?text=${msg}`, '_blank');
    }, 800);
  });
}

// ═══ GOOGLE ADS DETECTION ═══
const isAds = new URLSearchParams(window.location.search).get('ads') === 'true'
  || document.referrer.includes('google');
if (isAds) {
  const navLinks = document.getElementById('navLinks');
  const stickyCta = document.getElementById('stickyCta');
  if (navLinks) navLinks.style.display = 'none';
  if (stickyCta) stickyCta.style.display = 'flex';
}

// ═══ SMOOTH SCROLL ═══
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
